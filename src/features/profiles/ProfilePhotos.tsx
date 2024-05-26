import { observer } from "mobx-react-lite";
import { Button, Card, Grid, GridColumn, Header, Image, TabPane } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import { useState } from "react";
import PhotoUploadWidget from "../../app/common/imageUpload/PhotoUploadWidget";

interface Props {
  profile: Profile;
}

function ProfilePhotos({ profile }: Props) {
  const [addPhotoMode, setAddPhotoMode] = useState(false);
  const {
    profileStore: { isCurrentUser, uploadPhoto, uploading },
  } = useStore();

  function handlePhotoUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddPhotoMode(false));
  }

  return (
    <TabPane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="image"
            content="Photos"
          />
          {isCurrentUser && (
            <Button
              floated="right"
              basic
              content={addPhotoMode ? "Cancel" : "Add Photo "}
              onClick={() => setAddPhotoMode(!addPhotoMode)}
            />
          )}
        </Grid.Column>
        <GridColumn width={16}>
          {addPhotoMode ? (
            <PhotoUploadWidget
              uploadPhoto={handlePhotoUpload}
              loading={uploading}
            />
          ) : (
            <Card.Group itemsPerRow={5}>
              {profile.photos?.map((photo) => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                </Card>
              ))}
            </Card.Group>
          )}
        </GridColumn>
      </Grid>
    </TabPane>
  );
}

export default observer(ProfilePhotos);
