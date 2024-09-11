'use client'
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CalendarIcon, MapPinIcon, ClockIcon, TicketIcon } from "lucide-react"
import Header from "../../../components/ui/header"
import Footer from "../../../components/ui/footer"

export default function EventPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [ticketCount, setTicketCount] = useState(1)

    return (
        <>
            <Header/>
        <div className="bg-white dark:bg-[#111827] container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                    <img
                        src="/placeholder.svg?height=400&width=800"
                        alt="Event hero image"
                        className="w-full h-[400px] object-cover rounded-lg mb-6"
                    />
                    <h1 className="text-4xl text-black dark:text-white font-bold mb-4">Summer Music Festival 2023</h1>
                    <div className="flex items-center gap-4 text-muted-foreground mb-6">
                        <div className="text-black dark:text-white flex items-center">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            August 15-17, 2023
                        </div>
                        <div className="text-black dark:text-white flex items-center">
                            <MapPinIcon className="mr-2 h-4 w-4" />
                            Central Park, New York
                        </div>
                    </div>
                    <p className="text-black dark:text-white text-lg mb-6">
                        Join us for three days of incredible music, featuring top artists from around the world.
                        Experience unforgettable performances, discover new talent, and create lasting memories
                        with fellow music lovers.
                    </p>
                    <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Event Schedule</h2>
                    <div className="text-black dark:text-white space-y-4 mb-8">
                        {['Day 1', 'Day 2', 'Day 3'].map((day) => (
                            <Card key={day}>
                                <CardHeader>
                                    <CardTitle>{day}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-black dark:text-white list-disc list-inside space-y-2">
                                        <li>10:00 AM - Gates Open</li>
                                        <li>12:00 PM - Opening Act</li>
                                        <li>2:00 PM - Main Stage Performances</li>
                                        <li>8:00 PM - Headliner</li>
                                        <li>11:00 PM - Closing</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <Accordion type="single" collapsible className="text-black dark:text-white w-full">
                        <AccordionItem value="faq-1">
                            <AccordionTrigger>What items are prohibited?</AccordionTrigger>
                            <AccordionContent>
                                Prohibited items include outside food and drinks, weapons, drugs, and professional cameras.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                            <AccordionTrigger>Is there parking available?</AccordionTrigger>
                            <AccordionContent>
                                Limited parking is available on-site. We recommend using public transportation or ride-sharing services.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3">
                            <AccordionTrigger>What's the refund policy?</AccordionTrigger>
                            <AccordionContent>
                                Tickets are non-refundable, but can be transferred to another person up to 48 hours before the event.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Card className="sticky top-4">
                        <CardHeader>
                            <CardTitle>Book Your Tickets</CardTitle>
                            <CardDescription>Secure your spot at the Summer Music Festival</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="date">Select Date</Label>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                        disabled={(date) =>
                                            date < new Date("2023-08-15") || date > new Date("2023-08-17")
                                        }
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="tickets">Number of Tickets</Label>
                                    <div className="flex items-center">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                                        >
                                            -
                                        </Button>
                                        <Input
                                            id="tickets"
                                            type="number"
                                            value={ticketCount}
                                            onChange={(e) => setTicketCount(parseInt(e.target.value) || 1)}
                                            className="w-20 text-center mx-2"
                                        />
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setTicketCount(ticketCount + 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start">
                            <div className="flex justify-between w-full mb-4">
                                <span>Price per ticket:</span>
                                <span>$99.99</span>
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <span>Total:</span>
                                <span>${(99.99 * ticketCount).toFixed(2)}</span>
                            </div>
                            <Button className="w-full">
                                <TicketIcon className="mr-2 h-4 w-4" /> Book Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
            <Footer/>
        </>
            )
}