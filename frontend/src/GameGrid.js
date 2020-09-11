import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

function GameGrid(props) {
  return (
    <div className="Game-grid">
    {/* Start of Game Grid */}
    <Grid container spacing={0}
        direction="column"
        alignItems="center"
        justify="center">
        <Grid item xs={12}>
            <TextField id="box1" label="Cards" variant="outlined" />
            <TextField id="box2" label="Cards" variant="outlined" />
            <TextField id="box3" label="Cards" variant="outlined" />
            <TextField id="box4" label="Cards" variant="outlined" />
        </Grid>
    </Grid>
    {/* End of Game Grid */}
    </div>
  );
}

export default GameGrid;
