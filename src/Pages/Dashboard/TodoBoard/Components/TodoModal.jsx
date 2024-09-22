
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

const TodoDetailsModal = ({ open, handleModal, title, description, companyName, status,  name, businessEmail, backgroundColor }) => {
    return (
        <Dialog open={open} onClose={handleModal} fullWidth maxWidth="md">
            <DialogTitle style={{ backgroundColor }} className='flex justify-between items-center uppercase font-bold '>
                <strong>Order Details</strong>
                <MdClose className="text-3xl cursor-pointer text-red-600" onClick={handleModal} />
            </DialogTitle>
            <DialogContent dividers >
                <Typography gutterBottom>
                    <strong>Status:</strong> {status}
                </Typography>
                <div className='grid grid-cols-2'>
                    <Typography gutterBottom>
                        <strong>Full Name:</strong> {name}
                    </Typography>
                    <Typography gutterBottom>
                        <strong>Business Email:</strong> {businessEmail}
                    </Typography>
                </div>
                <div className='grid grid-cols-2'>
                    <Typography gutterBottom>
                        <strong>Title:</strong> {title}
                    </Typography>
                    <Typography gutterBottom>
                        <strong>Company:</strong> {companyName}
                    </Typography>
                </div>
                <Typography gutterBottom>
                    <strong>Description:</strong> {description}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

TodoDetailsModal.propTypes = {
    open: PropTypes.bool,
    handleModal: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    companyName: PropTypes.string,
    status: PropTypes.string,
    businessEmail: PropTypes.string,
    name: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default TodoDetailsModal;
