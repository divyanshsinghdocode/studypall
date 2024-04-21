import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "What do you want to know?",
            trigger: "2",
            hideInput: true,
          },
          {
            id: "2",
            options: [
              { value: 1, label: "Features", trigger: "3" },
              { value: 2, label: "Pricing ", trigger: "4" },
            ],
          },
          {
            id: "3",
            message: "Some Of The Features Are Chat, Google Signin, Preference Based Learning.",
            trigger: "2",
          },
          {
            id: "4",
            message:
              "There Are 3 Pricing 1. FREE! 2. 5$/mo 3. 10/mo For More Detailed Explanation Follow The Landing Page",
          },
        ]}
        floating={true}
        headerTitle={"Your Query Here"}
        botAvatar={"https://i.ibb.co/VqY2trr/Logo.png"}
        userAvatar={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />

      );
  }
}
SimpleForm.propTypes = {
    botAvatar: PropTypes.string.isRequired,
  };
export default SimpleForm;
