import { Card, Image, CardContent, CardHeader, CardMeta, CardDescription, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
}

function ActivityDetails({ activity, cancelSelectedActivity, openForm }: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => openForm(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={cancelSelectedActivity}
          />
        </Button.Group>
      </CardContent>
    </Card>
  );
}

export default ActivityDetails;
