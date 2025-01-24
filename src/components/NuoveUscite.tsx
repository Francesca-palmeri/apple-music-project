import { useEffect, useState } from "react"
import { Songs } from "../types/Songs"
import { Card, Col, Container, Row } from "react-bootstrap"
import OtherContents from "./OtherContents"

const NuoveUscite = function () {
  const [songs, setSongs] = useState<Songs[]>([])

  const fetchSongs = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=creepynuts"
      )
      if (response.ok) {
        const data = await response.json()
        setSongs(data.data)
        console.log("SONO DATA DI SONGS", data)
      } else {
        throw new Error("Errore nel recupero degli articoli")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSongs()
  }, [])

  return (
    <Container>
      <Row>
        <h2 className="text-white pb-1">Nuove uscite</h2>
        {songs.slice(0, 12).map((song) => (
          <Col xs={4} lg={2} key={song.id} className=" p-0">
            <Card className="me-2 bg-transparent text-white border-0">
              <Card.Img
                variant="top"
                src={song.album.cover_big}
                alt={song.title}
                className=" w-100"
              />
              <Card.Body>
                <Card.Title className=" mb-0 text-start">
                  {song.title}
                </Card.Title>
                <Card.Text className=" mb-0 text-start text-white-50">
                  {song.artist.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <OtherContents />
      </Row>
    </Container>
  )
}

export default NuoveUscite
