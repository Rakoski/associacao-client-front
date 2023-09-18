import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardActions,
  Link as LinkMaterial,
  Avatar,
  IconButton,
  Container,
  Button,
} from "@material-ui/core";
import { Row, Button as ButtonBootstrap } from "react-bootstrap";
import { formatarData } from "../../uteis/formatarData";
import EventoService from "../../service/EventoService";
import { useNotify } from "../../contextos/Notificacao";
import styles from "./estilo.css";
import { useParams } from "react-router-dom";

function Evento() {
  const [evento, setEvento] = useState({});
  const notify = useNotify();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        let evento = await EventoService.buscarPorId(id);
        setEvento(evento);
      } catch (error) {
        notify.showError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingBottom="100px"
        paddingTop="12px"
      >
        {/* A busca vai aqui */}
      </Box>
      <Row className="justify-content-center">
        <h1 className="mb-3 mt-3 text-dark text-xs-center">{evento.titulo}</h1>
      </Row>
      <Card style={{ borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="Imagem do Evento"
          height="500"
          image={evento.url}
          title="Imagem do Evento"
        />
        <CardContent>
          <p
            style={{
              fontFamily: "Arial",
              fontSize: 24,
              wordWrap: "break-word",
            }}
          >
            {" "}
            {`Data: ${formatarData(evento.data_inicio)} a ${formatarData(
              evento.data_fim
            )}`}
          </p>
          <p
            style={{
              fontFamily: "Arial",
              fontSize: 22,
              wordWrap: "break-word",
              whiteSpace: "pre-line"
            }}
          >
            {evento.descricao}
          </p>
          <p
            style={{
              fontFamily: "Arial",
              fontSize: 18,
              wordWrap: "break-word",
            }}
          >
            {`Local: ${evento.local}`}
          </p>
          <p
            style={{
              fontFamily: "Arial",
              fontSize: 18,
              wordWrap: "break-word",
            }}
          >
            Participe:{" "}
            <a
              href={`//${evento.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {evento.link}
            </a>
          </p>
        </CardContent>
      </Card>
      <Row className="justify-content-end">
        <Button href="/site/eventos" variant="secondary" size="lg">
          Voltar
        </Button>
      </Row>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingBottom="20px"
        paddingTop="12px"
      ></Box>
    </Container>
  );
}

export default Evento;
