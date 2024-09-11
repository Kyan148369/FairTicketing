"use client"

import { useState, useEffect, useCallback } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Connection, PublicKey } from '@solana/web3.js'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Ticket, Image as ImageIcon } from "lucide-react"

require('@solana/wallet-adapter-react-ui/styles.css')

interface UserData {
  name: string
  avatar: string
  walletAddress: string
}

interface Event {
  id: number
  name: string
  date: string
  location: string
}

interface NFT {
  id: number
  name: string
  image: string
}

export function Dashboard() {
  const { publicKey, connected, connecting, disconnect } = useWallet()
  const [user, setUser] = useState<UserData | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [nfts, setNFTs] = useState<NFT[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUserData = useCallback(async (publicKey: PublicKey) => {
    setIsLoading(true)
    setError(null)
    try {
      // In a real application, you would fetch this data from your backend or the Solana blockchain
      // For this example, we'll use mock data
      setUser({
        name: "Solana User",
        avatar: "/placeholder.svg?height=100&width=100",
        walletAddress: publicKey.toBase58(),
      })

      setEvents([
        { id: 1, name: "Solana Summer Hackathon", date: "2023-07-15", location: "Virtual" },
        { id: 2, name: "DeFi Conference", date: "2023-08-22", location: "New York" },
      ])

      setNFTs([
        { id: 1, name: "Solana Summer Hack Badge", image: "/placeholder.svg?height=160&width=240" },
        { id: 2, name: "DeFi Conf Attendance Proof", image: "/placeholder.svg?height=160&width=240" },
      ])
    } catch (error) {
      console.error("Error fetching user data:", error)
      setError("Failed to fetch user data. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (connected && publicKey) {
      fetchUserData(publicKey)
    } else {
      setUser(null)
      setEvents([])
      setNFTs([])
    }
  }, [connected, publicKey, fetchUserData])

  const handleDisconnect = async () => {
    try {
      await disconnect()
      setUser(null)
      setEvents([])
      setNFTs([])
    } catch (error) {
      console.error("Error disconnecting:", error)
      setError("Failed to disconnect. Please try again.")
    }
  }

  if (connecting || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <p className="text-white text-2xl">Connecting to your wallet...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center text-red-500">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">{error}</p>
            <Button onClick={() => setError(null)} className="w-full mt-4">
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!connected || !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">Connect to SolanaTickets</CardTitle>
          </CardHeader>
          <CardContent>
            <WalletMultiButton className="w-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.walletAddress}</p>
              </div>
            </div>
            <Button onClick={handleDisconnect} variant="outline">
              Disconnect
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booked Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {events.map((event) => (
                <li key={event.id} className="flex items-center space-x-4">
                  <Ticket className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{event.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {event.date} - {event.location}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your NFTs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {nfts.map((nft) => (
                <div key={nft.id} className="relative">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <Badge className="absolute bottom-2 left-2 bg-black bg-opacity-50">
                    <ImageIcon className="h-4 w-4 mr-1" />
                    {nft.name}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}