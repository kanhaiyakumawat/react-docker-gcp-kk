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
                  image="/Algorithms.gif"
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
                  image="/DataStructures.gif"
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
                  image="/Languages.gif"
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
                  image="/BigData.gif"
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
                  image="/AIML.gif"
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
                  image="/Cloud.gif"
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
