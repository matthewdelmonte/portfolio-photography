import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pokemon from '../../Static/Images/pokemon.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImageCard() {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    component='img'
                    alt='Infernape Pokemon'
                    height='340'
                    image={pokemon}
                    title='Infernape'
                />
                <CardContent>
                    <Typography gutterBottom='h5' component='h2'>
                        Infernape
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Fire type starter from the Sinnoh Region.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>
                    Share
                </Button>
                <Button size='small' color='primary'>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
