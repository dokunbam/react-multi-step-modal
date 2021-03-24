
import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import Info from "./Modals/Info";
import SenderRecipientInfo from "./Modals/SenderRecipientInfo";
import OopsNoAccount from "./Modals/OopsNoAccount";
import ConfirmSMS from "./Modals/ConfirmSMS";



const defaultData = {
    senderName: "",
    recipientName: "",
    recipientPhoneNumber: "",
}

const steps = [
    { id: '' },
    { id: 'Info' },
    { id: 'SenderRecipientInfo' },
    { id: 'OopsNoAccount' },
    { id: 'ConfirmSMS' }
]

function OutputStepModels(props) {
    const [show, setShow] = useState("");

    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    });

    props = { formData, setForm, navigation, show, setShow }

    switch (steps.id) {
        case "Info":
            return <Info {...props} />;
        case "SenderRecipientInfo":
            return <SenderRecipientInfo {...props} />;
        case "ConfirmSMS":
            return <ConfirmSMS {...props} />;
        case "OopsNoAccount":
            return <OopsNoAccount {...props} />;
        default:
            return <Info {...props} />;

    }
}

export default OutputStepModels