import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { notify } from "../lib/api";

const SendNotificationForm = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await notify({ message, showToast, userId });
    setIsLoading(false);

    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl mb={3}>
        <FormLabel htmlFor="message" fontSize={14}>
          Message
        </FormLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="Message to be shown in the notification"
          size="sm"
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormControl>

      <Button
        type="submit"
        variant="solid"
        colorScheme="gray"
        size="sm"
        isDisabled={message === ""}
        isLoading={isLoading}
      >
        Send notification
      </Button>
    </form>
  );
};

export default SendNotificationForm;
