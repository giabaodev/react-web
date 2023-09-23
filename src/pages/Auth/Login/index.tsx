import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Button, Checkbox, InputAdornment, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import BInput from '../../../components/Inputs/BInput';
import Layout from '../Layout';
import styles from '../styles.module.scss';
import { CheckedIcon, UncheckIcon } from '../../../components/icons';

export default function Login() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleVisiblePassword = () => {
    setVisible(!isVisible);
  };

  const handleInputChange = (type: string, value: string) => {
    if (type === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <Layout>
      <div className={styles.titleBlock}>
        <Typography variant="h4" component="h4">
          Welcome back!
        </Typography>
      </div>
      <div className={styles.inputFieldBlock}>
        <BInput
          label="Username"
          value={username}
          placeholder="Enter your username"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('username', e.target.value)}
        />
      </div>
      <div className={styles.inputFieldBlock}>
        <BInput
          type={isVisible ? 'text' : 'password'}
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleVisiblePassword} style={{ cursor: 'pointer' }}>
                {isVisible ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.rememberBlock}>
        <div>
          <Checkbox
            id="remember-me"
            className={styles.muiCheckBox}
            checkedIcon={<CheckedIcon />}
            icon={<UncheckIcon />}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <label>Forgot password?</label>
      </div>
      <div className={styles.loginButtonBlock}>
        <Button>Login</Button>
      </div>
      {/* <CircularProgress /> */}
    </Layout>
  );
}
