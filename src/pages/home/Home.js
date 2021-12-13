import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
})

const Home = (props) => {
  const classes = useStyles()

  return (
    <div>
      <Container fluid>
        <Row className='homePageRow'>
          <Col xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://drive.google.com/uc?id=17DhVyIp3_rOo6qA-09FE6uUivc0sHASY"
                  title="Computer Algorithms"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Algorithms
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://drive.google.com/uc?id=1YChieDOV68V6rf6TKx_6tUM7uxjIoCa3"
                  title="Data Structures"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Data Structures
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://drive.google.com/uc?id=1fqc9CQK2fkWCvIp9ho2rHBV-zLJbGM6W"
                  title="Languages"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Programming Languages
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          </Row>
          <Row className='homePageRow'>
          <Col xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://drive.google.com/uc?id=1-XwOdGIsT6i51eZIavfd9ISLLepiME8Y"
                  title="Big Data"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Big Data
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://drive.google.com/uc?id=1k9PBbbpsyjF7WLNhau7qzFtIwUiwdiI2"
                  title="AI ML"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    AI/ML
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://drive.google.com/uc?id=1xIR5fY7ySC9Y7ID9sdyJ4y3dBtEEZ-dd"
                  title="Cloud Technologies"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cloud
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
