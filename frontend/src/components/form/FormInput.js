import { motion } from 'framer-motion';
import { FormHelperText, TextField } from '@mui/material';

export const FormInput = ({ fieldProps, error, placeholder }) => (
  <motion.div whileHover={{ y: -5 }}>
    <TextField fullWidth placeholder={placeholder} {...fieldProps} />
    {error && (
      <FormHelperText sx={{ mt: 1 }} error>
        {error.message}
      </FormHelperText>
    )}
  </motion.div>
);
