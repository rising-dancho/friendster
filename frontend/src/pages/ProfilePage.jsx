import { useEffect, useState } from 'react';

function ProfilePage() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function fetchProfiles() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profile`
      );
      const json = await response.json();

      if (response.ok) {
        setProfiles(json.data);
      }
    }

    fetchProfiles();
  }, []);

  const DEFAULT_DP =
    'https://web.archive.org/web/20090322233702im_/http://photos-p.friendster.com/photos/10/16/80786101/1_762762524m.jpg';

  const USER = 'Christine Nichols';
  const F_NAME = 'Christine';

  const NO_PHOTO =
    'https://web.archive.org/web/20090322215529im_/http://images.friendster.com/images/nophoto.jpg';

  return (
    <div className="container profile-gridContainer">
      <div className="Person-Info">
        <div className="profile-header">
          <h3>{USER}</h3>
        </div>
        <div className="profile-background">
          <div className="bio">
            <div className="bio-container">
              <figure>
                <img src={DEFAULT_DP} alt="profile_pic" />
                <figcaption>ME</figcaption>
              </figure>
              <div className="profile-nav">
                <button className="profile-button">Send Message</button>
                <button className="profile-button">Send Smile</button>
                <button className="profile-button">Add as Friend</button>
                <button className="profile-button">Forward to Friend</button>
                <button className="profile-button">Add Bookmark</button>
              </div>
            </div>

            <div className="bio-details">
              <p>Female, 34, Single</p>
              <p>Interested In: Friends</p>
              <p>Member Since: Sep 2008</p>
              <p>
                Location:{' '}
                <a className="profile-links" href="#">
                  United States
                </a>
              </p>
              <p>
                Hometown:{' '}
                <a className="profile-links" href="#">
                  Taipei, Taiwan
                </a>
              </p>
              <p>
                College:{' '}
                <a className="profile-links" href="#">
                  California State University
                </a>
              </p>
              <p>
                {F_NAME}'s URL:{' '}
                <a className="profile-links" href="#">
                  http://profiles.friendster.com/80786101
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Friends">
        <div className="profile-header">
          <h3>{F_NAME}'s Friends</h3>
        </div>
        <div className="profile-background">
          <div className="friendslist">
            <figure className="friends-thumbnails">
              <a href="#">
                <img
                  src="https://web.archive.org/web/20090322233659im_/http://photos-p.friendster.com/photos/23/94/244932/36578070151604m.jpg"
                  alt="profile_pic"
                />
              </a>
              <figcaption>
                <a className="friend-name" href="#">
                  Abe
                </a>
              </figcaption>
            </figure>
            <figure className="friends-thumbnails">
              <a href="#">
                <img
                  src="https://web.archive.org/web/20090322233659im_/http://photos-p.friendster.com/photos/41/17/267114/1_744472032m.jpg"
                  alt="profile_pic"
                />
              </a>
              <figcaption>
                <a className="friend-name" href="#">
                  Jason
                </a>
              </figcaption>
            </figure>
            <figure className="friends-thumbnails">
              <a href="#">
                <img
                  src="https://web.archive.org/web/20090322233659im_/http://photos-p.friendster.com/photos/59/69/289695/11225397145097m.jpg"
                  alt="profile_pic"
                />
              </a>
              <figcaption>
                <a className="friend-name" href="#">
                  ' WaynE '
                </a>
              </figcaption>
            </figure>
            <figure className="friends-thumbnails">
              <a href="#">
                <img
                  src="https://web.archive.org/web/20090322233659im_/http://photos.friendster.com/photos/50/03/293005/1_383497287m.jpg"
                  alt="profile_pic"
                />
              </a>
              <figcaption>
                <a className="friend-name" href="#">
                  les
                </a>
              </figcaption>
            </figure>
            <figure className="friends-thumbnails">
              <a href="#">
                <img
                  src="https://web.archive.org/web/20090322233659im_/http://photos-357.friendster.com/e1/photos/75/35/305357/28608334952944m.jpg"
                  alt="profile_pic"
                />
              </a>
              <figcaption>
                <a className="friend-name" href="#">
                  mikEe
                </a>
              </figcaption>
            </figure>
            <figure className="friends-thumbnails">
              <a href="#">
                <img src={NO_PHOTO} alt="profile_pic" />
              </a>
              <figcaption>
                <a className="friend-name" href="#">
                  Fang
                </a>
              </figcaption>
            </figure>
          </div>
          <a className="profile-links view-all" href="#">
            View All (2890)
          </a>
        </div>
      </div>
      <div className="Gallery">
        <div className="profile-header">
          <h3>{F_NAME}'s Photo Gallery</h3>
        </div>
        <div className="profile-background">
          <p></p>
        </div>
      </div>
      <div className="About">
        <div className="profile-header">
          <h3>More About {F_NAME}</h3>
        </div>
        <div className="profile-background">
          {profiles &&
            profiles.map((profile) => {
              return (
                <>
                  <h4>Schools:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.schools}
                  </p>
                  <h4>Occupation:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.occupation}
                  </p>
                  <h4>Hobbies and Interests:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.hobbiesAndInterests}
                  </p>
                  <h4>Favorite Books:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.favBooks}
                  </p>
                  <h4>Favorite Movies:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.favMovies}
                  </p>
                  <h4>Favorite Music:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.favMusic}
                  </p>
                  <h4>Favorite TV Shows:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.favTVShows}
                  </p>
                  <h4>Zodiac Sign:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.zodiacSign}
                  </p>
                  <h4>About Me:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.aboutMe}
                  </p>
                  <h4>Who I Want to Meet:</h4>
                  <p className="margin-bottom" key={profile._id}>
                    {profile.whoIWantToMeet}
                  </p>
                </>
              );
            })}
        </div>
      </div>
      <div className="Testimonials">
        <div className="profile-header">
          <h3>Testimonials and Comments for {F_NAME}</h3>
        </div>
        <div className="profile-background">
          <a className="profile-links">Post a Comment</a>
          <p>No Comments yet.</p>
        </div>
      </div>
      <div className="Groups">
        <div className="profile-header">
          <h3>{F_NAME}'s Groups</h3>
        </div>
        <div className="profile-background">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
