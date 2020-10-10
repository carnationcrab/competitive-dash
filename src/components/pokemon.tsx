import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

// Pokemon.propTypes = {
//   // name: PropTypes.string.isRequired,
//   // typing: PropTypes.array.isRequired,
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function Pokemon(props: any) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.data.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.data.type.map((oneType: any) => (
              <div>{oneType.info.name}</div>
            ))}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.data.sprites.normal}
        title="Sprite"
      />
    </Card>
    // {/* This pokemon is {props.data.name}
    // <ul>
    //   Types:
    //   {props.data.type.map((oneType: any) => (
    //     <li>{oneType.info.name}</li>
    //   ))}
    // </ul> */}
  );
}

export default Pokemon;
