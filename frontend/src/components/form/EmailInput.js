import { motion } from 'framer-motion';
import { FormHelperText, TextField } from '@mui/material';

export const EmailInput = ({ fieldProps, error }) => (
  <motion.div whileHover={{ y: -5 }}>
    <TextField fullWidth placeholder={'Email'} {...fieldProps} />
    {error && (
      <FormHelperText sx={{ mt: 1 }} error>
        {error.message}
      </FormHelperText>
    )}
  </motion.div>
);
