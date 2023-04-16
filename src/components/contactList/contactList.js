import { useSelector, useDispatch } from "react-redux";
import { filtredContacts } from "redux/contacts/selectors";
import { ConstactListStyled, ListItemStyled } from './contactListStyled';
import { deleteContatcs } from "redux/contacts/operations";
import { Button } from "@mui/material";

export default function ContactList() {

  const dispatch = useDispatch();

  const filtredComponents = useSelector(filtredContacts);

  const deleteClick = (id) => {
    // console.log(id)
    return dispatch(deleteContatcs(id))
  };
      
        return (
            <>
                    <ConstactListStyled
                    >
                {filtredComponents.map(item =>
                (
                         <ListItemStyled style={{display:'flex', gap:'12px', alignItems:'center'}} key={item.name} > <span> {item.name} : {item.number}</span> <Button variant="contained" type="button" onClick = {()=>{deleteClick(item.id)}}>Delete</Button></ListItemStyled>
                         )
                         )}
                         </ConstactListStyled>
            </>
        )
    }