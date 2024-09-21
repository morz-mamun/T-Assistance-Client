import { Card, CardContent, Typography } from "@mui/material"
import { useState } from "react";
import TodoDetailsModal from "./TodoModal";
import PropTypes from 'prop-types';
const TodoCard = ({ name, title, description, shortDescription, service, backgroundColor, companyName, status, hoverColor }) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((pre) => !pre);
  };

  return (

    <>

      <Card className="cursor-pointer" onClick={handleModal} sx={{
        maxWidth: 345, backgroundColor: backgroundColor,
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: hoverColor,
        },
      }}>
        <CardContent className=" text-left">
          <Typography className="font-bold pb-2" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {service}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {shortDescription}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Company: {companyName}
          </Typography>
        </CardContent>
      </Card>

      {/*show modal */}
      <TodoDetailsModal
        open={open}
        handleModal={handleModal}
        backgroundColor={backgroundColor}
        status={status}
        name={name}
        title={title}
        description={description}
      />
    </>
  )
}

TodoCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  shortDescription: PropTypes.string,
  service: PropTypes.string,
  backgroundColor: PropTypes.string,
  companyName: PropTypes.string,
  status: PropTypes.string,
  hoverColor: PropTypes.string
} 

export default TodoCard
