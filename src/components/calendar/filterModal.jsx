import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Modal,
  CardHeader,
  Avatar,
  CardContent,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    outline: "none"
  },
  cardBody: {
    padding: "0 16px"
  }
}));

class filterModal extends Component {
  constructor(){
     super();
     this.state = {
         classes: useStyles(),
         tags:[]
      }
  }

  handleChange = (t) => {

  };

  render(){
      return (
         <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.open}
            onClose={this.props.onClose}
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
            }}
         >
            <div className={this.classes.paper}>
               <Button
                     onClick={() => {}}
                     variant="contained"
                     color="primary"
                     style={{ width: 105, margin: 10 }}
               >
                     All
               </Button>
               <Button
                     onClick={() => {}}
                     variant="contained"
                     color="primary"
                     style={{ width: 105, margin: 10 }}
               >
                     Subscribed
               </Button>
               <FormGroup row>
                     {this.state.tags.map(tag => (
                        <FormControlLabel
                           control={
                                 <Checkbox checked={tag.checked} onChange={this.handleChange(tag.id)} value={tag.title} />
                           }
                           label={tag.title}
                        />
                     ))}
               </FormGroup>
            </div>
         </Modal>
      );
   }
};

export default filterModal;
