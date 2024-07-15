import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import ProfileForm from '../components/ProfileForm';
// source: https://sonner.emilkowal.ski/toast

function SettingsPage() {
  // navigate to different page on click: https://stackoverflow.com/questions/51393153/react-routing-redirect-onclick
  const navigate = useNavigate();
  function deleteAccount() {
    toast('Warning!', {
      style: { padding: '10px', display: 'flex', flexDirection: 'column' },
      description:
        'This action cannot be undone, do you really want to delete your account?',
      action: {
        label: 'Yes, delete my account',
        onClick: () => {
          localStorage.clear();
          navigate('/');
        },
      },
    });
  }

  return (
    <div className="container">
      <div>
        <Toaster expand={true} position="top-center" closeButton />
        <h2 className=" margin-bottom-normal">Settings</h2>
        <ProfileForm />
        <div>
          <h2 className="sub-heading sub-heading--blue">Delete Account</h2>
          <p className="margin-bottom-sm">
            Deleting your account will delete all of the content you have
            created. It will be completely irrecoverable
          </p>
          <button onClick={deleteAccount} className="redBigButton">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
