import { useState } from 'react';

import {
  Stack,
  TextField
} from '@mui/material';

import {
  DesktopDatePicker,
  MobileDatePicker,
  TimePicker,
  LocalizationProvider,
} from '@mui/lab';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

const App = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} margin={4}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="yyyy/MM/dd"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDatePicker
          label="Date mobile"
          inputFormat="yyyy/MM/dd"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          ampm={false}
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default App;
