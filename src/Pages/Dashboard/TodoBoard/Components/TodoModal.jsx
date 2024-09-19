
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { MdClose } from 'react-icons/md';

const TodoDetailsModal = ({ open, handleModal, title, description, companyName, companyHQ, companySize, companyWebsite, industry, status, phoneNumber, service, businessEmail, name, backgroundColor }) => {
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
                <div className='grid grid-cols-2'>
                    <Typography gutterBottom>
                        <strong>Company HQ:</strong> {companyHQ}
                    </Typography>
                    <Typography gutterBottom>
                        <strong>Company Size:</strong> {companySize}
                    </Typography>
                </div>
                <div className='grid grid-cols-2'>
                    <Typography gutterBottom>
                        <strong>Website:</strong> <a href={companyWebsite} target="_blank" rel="noopener noreferrer">{companyWebsite}</a>
                    </Typography>
                    <Typography gutterBottom>
                        <strong>Industry:</strong> {industry}
                    </Typography>
                </div>
                <div className='grid grid-cols-2'>
                    <Typography gutterBottom>
                        <strong>Phone Number:</strong> {phoneNumber}
                    </Typography>
                    <Typography gutterBottom>
                        <strong>Service:</strong> {service}
                    </Typography>
                </div>
                <Typography gutterBottom>
                    <strong>Description:</strong> {description}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default TodoDetailsModal;
