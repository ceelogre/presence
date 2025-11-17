"use client"

import { useEffect, useState } from "react"
import Button from "@/components/Button"
import SpotifyWidget from "@/components/widgets/spotify/SpotifyWidget";
import Modal from "@/components/Modal";
import styles from "./work.module.css";


export default function SpotifyClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [spotifyAccessToken, setSpotifyAccessToken] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
  const handleMessage = (event: MessageEvent) => {
    if (event.data.type === 'SPOTIFY_AUTH_SUCCESS') {
      setIsAuthenticated(true);
      setSpotifyAccessToken(event.data.data.access_token)
    }
  }
  window.addEventListener('message', handleMessage)
  return () => window.removeEventListener('message', handleMessage)
}, [])
  const handleAuth = async () => {
    try {
        window.open('/api/spotify/authorize', '_blank', 'width=600,height=700,scrollbars=yes,resizable=yes')
    } catch (error) {
      console.error(error)
        // TODO: handle error
        console.error(error)
    }
  }

  const handleViewTracks = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.isAuth}>
          <p className={styles.successMessage}>All good! Ready?</p>
            <Button variant="link" onClick={handleViewTracks}>
              View your top 5 songs
            </Button>
          
        </div>
      ) : (
        <div>
        <span>To get started {' '} </span>
          <Button variant="link" onClick={handleAuth}>
            Login with Spotify
          </Button>
       </div> 
      )}
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Your Top 5 Songs This Month"
      >
        <SpotifyWidget token={spotifyAccessToken} />
      </Modal>
    </div>
  )
}