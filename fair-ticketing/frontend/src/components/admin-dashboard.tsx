"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AdminDashboard() {
  const [scheduleRows, setScheduleRows] = useState([{ date: "", startTime: "", endTime: "" }])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const addScheduleRow = () => {
    setScheduleRows([...scheduleRows, { date: "", startTime: "", endTime: "" }])
  }

  const removeScheduleRow = (index: number) => {
    const newRows = scheduleRows.filter((_, i) => i !== index)
    setScheduleRows(newRows)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted")
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Create New Event - SolanaTickets Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="eventName">Event Name</Label>
              <Input id="eventName" placeholder="Enter event name" required />
            </div>

            <div>
              <Label htmlFor="eventDescription">Event Description</Label>
              <Textarea id="eventDescription" placeholder="Enter event description" required />
            </div>

            <div>
              <Label htmlFor="eventDate">Event Date</Label>
              <Input id="eventDate" type="datetime-local" required />
            </div>

            <div>
              <Label htmlFor="ticketPrice">Ticket Sale Price</Label>
              <Input id="ticketPrice" type="number" min="0" step="0.01" placeholder="0.00" required />
            </div>

            <div>
              <Label htmlFor="ticketsAvailable">Number of Tickets Available</Label>
              <Input id="ticketsAvailable" type="number" min="1" placeholder="100" required />
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Event Accordion Description</AccordionTrigger>
                <AccordionContent>
                  <Textarea placeholder="Event agenda, keynotes, etc." className="min-h-[100px]" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div>
              <Label>Event Schedule</Label>
              {scheduleRows.map((row, index) => (
                <div key={index} className="flex gap-2 mt-2">
                  <Input
                    type="date"
                    placeholder="Date"
                    value={row.date}
                    onChange={(e) => {
                      const newRows = [...scheduleRows]
                      newRows[index].date = e.target.value
                      setScheduleRows(newRows)
                    }}
                  />
                  <Input
                    type="time"
                    placeholder="Start Time"
                    value={row.startTime}
                    onChange={(e) => {
                      const newRows = [...scheduleRows]
                      newRows[index].startTime = e.target.value
                      setScheduleRows(newRows)
                    }}
                  />
                  <Input
                    type="time"
                    placeholder="End Time"
                    value={row.endTime}
                    onChange={(e) => {
                      const newRows = [...scheduleRows]
                      newRows[index].endTime = e.target.value
                      setScheduleRows(newRows)
                    }}
                  />
                  <Button type="button" variant="destructive" size="icon" onClick={() => removeScheduleRow(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addScheduleRow} className="mt-2">
                <PlusCircle className="h-4 w-4 mr-2" /> Add Schedule Row
              </Button>
            </div>

            <div>
              <Label htmlFor="eventImage">Event Image</Label>
              <Input id="eventImage" type="file" accept="image/*" onChange={handleImageUpload} className="mb-2" />
              {selectedImage && (
                <div className="mt-2">
                  <img src={selectedImage} alt="Event preview" className="max-w-full h-auto rounded-lg" />
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">Create Event</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}