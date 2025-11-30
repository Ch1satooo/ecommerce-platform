import { useState } from 'react';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme/theme';
import Lottie from 'lottie-react';
import { ecommerceOutlookAnimation } from '../assets';
import { FormInput } from '../components/form/FormInput';
import { useForm } from 'react-hook-form';
import { motion, MotionConfig } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(''); // The initial state passed is an empty string.
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const is900 = useMediaQuery(theme.breakpoints.down(900));
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Stack width={'100vw'} height={'100vh'} direction="row" sx={{ overflowY: 'hidden' }}>
      {!is900 && (
        <Stack bgcolor={'black'} flex={1} justifyContent={'center'}>
          <Lottie animationData={ecommerceOutlookAnimation} />
        </Stack>
      )}

      <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
        <Stack direction="column" justifyContent={'center'} alignItems={'center'}>
          <Stack spacing={0.4}>
            <Typography variant="h2" fontWeight={600} sx={{ wordBreak: 'break-word' }}>
              Ziyi Shop
            </Typography>
            <Typography variant="body2" alignSelf={'flex-end'} color={'GrayText'}>
              - Shop Anything
            </Typography>
          </Stack>
        </Stack>

        <Stack
          mt={4}
          spacing={2}
          width={is480 ? '95vw' : '28rem'}
          component={'form'}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            fieldProps={register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: 'Please enter a valid email',
              },
            })}
            error={errors.email}
            placeholder={'Email'}
          />
          <FormInput
            fieldProps={register('password', { required: 'Password is required' })}
            error={errors.password}
            placeholder={'Password'}
          />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
            <Button
              type={'submit'}
              fullWidth
              sx={{ height: '2.5rem' }}
              variant="contained"
              loading={isSubmitting}
            >
              Login
            </Button>
          </motion.div>
          <Stack
            direction="row"
            justifyContent={'space-between'}
            alignItems={'center'}
            flexWrap="wrap-reverse"
          >
            <MotionConfig whileHover={{ x: 2 }} whileTap={{ scale: 1.05 }}>
              <motion.div>
                <Typography
                  component={Link}
                  mr={'1.5rem'}
                  sx={{ color: 'text.primary', textDecoration: 'none' }}
                  to={'/forgot-password'}
                >
                  Forgot password
                </Typography>
              </motion.div>
              <motion.div>
                <Typography
                  sx={{ color: 'text.primary', textDecoration: 'none' }}
                  component={Link}
                  to={'/signup'}
                >
                  Don't have an account?
                  <span style={{ color: theme.palette.primary.dark }}> Register</span>
                </Typography>
              </motion.div>
            </MotionConfig>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
