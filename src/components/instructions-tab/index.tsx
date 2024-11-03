import React, {SetStateAction, useState} from "react";
import {Collapse, Container, Card, Form, Modal} from "react-bootstrap";
import "./index.css"

interface InstructionsTabProps {
    showInstructionsModal: boolean;
    setShowInstructionsModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowExamplesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function InstructionsTab({showInstructionsModal, setShowInstructionsModal,setShowExamplesModal}: InstructionsTabProps) {
    const [expend, setExpend] = useState(false);
    const handleClick = () => {
        setExpend(!expend);
    };

    const handleChecked = () => {
        setShowInstructionsModal((prev)=>!prev);
        sessionStorage.setItem("readInstructions", "false")
        setShowExamplesModal((prev)=>!prev)
        sessionStorage.setItem("readExamples", "true")

    }

    return (
        <Container className={showInstructionsModal?"":"tw-my-2"+" h6  tw-flex-col tw-border-collapse tw-select-none"}>
            <Card
                className={
                    !expend
                        ? "tw-bg-opacity-0 tw-transition-all tw-duration-300 hover:tw-scale-[101%] hover:tw-drop-shadow-lg "
                        : "" + "tw-select-none "
                }
            >
                <Card.Header
                    onClick={handleClick}
                    className="tw-flex tw-justify-between tw-bg-[#edf8b140]"
                >
                    <div className="h6">הוראות</div>
                    <div className="h6">(לחץ כדי להרחיב)</div>
                </Card.Header>
                <Collapse in={expend}>
                    <div>
                        <Card.Body className="tw-h-fit tw-bg-[#edf8b140]">
                            <p className="h6">בניסוי הזה נציג לכם משפטים בעברית בתוך הקשר של פיסקה. נבקש מכם לחשוב מאיזו
                                פרספקטיבה
                                מוצגים אירועים שמתוארים במשפט מסוים מתוך הפיסקה.</p>
                            <p className="h6">
                                המשימה שלכם היא ליצור צמדים של שאלה-תשובה, בפורמט שאנחנו הגדרנו מראש. הכל יתייחס לתוכן
                                של אותו משפט מודגש בפיסקה.</p>
                            <p className="h6">
                                הכנו כמה דוגמאות עם הסברים מפורטים כאן למטה. אנא קיראו בעיון את הדוגמאות לפני שאתם
                                מתחילים את הניסוי עצמו.</p>
                            <p className="h6">
                                בהצלחה!</p>
                            <div className={+!showInstructionsModal?"tw-hidden":""+" tw-flex tw-justify-center "}>
                                <Form.Check
                                    checked={!showInstructionsModal}
                                    onChange={handleChecked}
                                    label="קראתי את ההוראות"
                                />
                            </div>

                        </Card.Body>

                    </div>
                </Collapse>
            </Card>
        </Container>
    );
}

export default InstructionsTab;
