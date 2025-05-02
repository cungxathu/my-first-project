import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Button, TextField, IconButton, Slide } from "@mui/material";
import { MdClose } from "react-icons/md";

// Tạo hiệu ứng trượt từ dưới lên
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FeedbackForm = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [feedback, setFeedback] = useState("");
    const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });

    const handleNextStep = () => setStep(2);
    const handleBack = () => setStep(1);
    const handleSubmit = () => {
        if (!userInfo.name || !userInfo.email || !userInfo.phone) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }


        console.log("Feedback submitted:", { feedback, userInfo });
        alert("Cảm ơn bạn đã gửi góp ý!");
        onClose(); // Đóng modal sau khi gửi
        setStep(1); // Reset về bước đầu tiên
        setFeedback("");
        setUserInfo({ name: "", email: "", phone: "" });
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            TransitionComponent={Transition} // Áp dụng hiệu ứng trượt
        >
            <DialogTitle className="feedback1">
                Ý KIẾN ĐÓNG GÓP
                <IconButton onClick={onClose}>
                    <MdClose size={24} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {step === 1 ? (
                    <>
                        <p className="">Cảm ơn bạn đã luôn ủng hộ. PJI rất mong nhận được góp ý của bạn.</p>
                        <TextField
                            label="Nhập góp ý của bạn..."
                            fullWidth
                            multiline
                            rows={4}
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="mt-4"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="mt-4"
                            onClick={handleNextStep}
                        >
                            Tiếp tục
                        </Button>
                    </>
                ) : (
                    <>
                        <p className="">Vui lòng cung cấp thông tin để chúng tôi có thể liên hệ với bạn:</p>
                        <TextField
                            label="Họ tên"
                            fullWidth
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                            className="mt-2"
                        />
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                            className="mt-2"
                        />
                        <TextField
                            label="Số điện thoại"
                            type="tel"
                            fullWidth
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                            className="mt-2"
                        />
                        <div className=" feedback2 mt-4 ">
                            <Button  variant="outlined" onClick={handleBack}>Quay lại</Button>
                            <Button  variant="contained" color="primary" onClick={handleSubmit}>Gửi ý kiến</Button>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default FeedbackForm;
