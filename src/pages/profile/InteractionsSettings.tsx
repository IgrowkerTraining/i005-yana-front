import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CommonBox from '../../commons/CommonBox';
import CommonSwitch from '../../commons/CommonSwitch';
import SettingsSection from '../../components/profile/SettingsSection';
import { useProfileRedirect } from '../../hooks/useProfileRedirect';
import { useSettingsStore } from '../../store/useSettingsStore';
import theme from '../../theme';

export default function InteractionsSettings() {
  useProfileRedirect();
  const { t } = useTranslation();
  const { settings, updateSetting } = useSettingsStore();

  const handleMuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const duration = e.target.value as '1h' | '24h';
    updateSetting('mute', {
      duration,
      originalDuration: duration,
      createdAt: Date.now(),
    });
  };

  return (
    <SettingsSection
      title="/profile.interactions"
      gridRow={{ lg: '1 / 5', sm: '12 / 16' }}
      gridColumn={{ lg: '9 / 13', sm: '1 / 13' }}
    >
      <CommonBox sx={{ justifyContent: 'space-between' }}>
        <Typography variant="body1" fontWeight="bold" width="40%">
          {t('/profile.saveHistory')}
        </Typography>
        <CommonSwitch
          checked={settings.saveHistory}
          onChange={(e) => updateSetting('saveHistory', e.target.checked)}
        />
      </CommonBox>

      <CommonBox sx={{ justifyContent: 'space-between' }}>
        <Typography variant="body1" fontWeight="bold" width="40%">
          {t('/profile.hideStatus')}
        </Typography>
        <CommonSwitch
          checked={settings.hideStatus}
          onChange={(e) => updateSetting('hideStatus', e.target.checked)}
        />
      </CommonBox>

      <CommonBox sx={{ justifyContent: 'space-between' }}>
        <FormControl
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'black',
            backgroundColor: 'white',
          }}
        >
          <FormLabel
            id="mute-radio-group-label"
            sx={{ margin: 0, color: 'black', fontWeight: 'bold' }}
          >
            {t('/profile.mute')}
          </FormLabel>
          <RadioGroup
            aria-labelledby="mute-radio-group-label"
            value={settings.mute?.originalDuration || ''}
            onChange={handleMuteChange}
            name="mute-radio-group"
            sx={{ display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'nowrap' }}
          >
            <FormControlLabel
              value="1h"
              control={
                <Radio
                  sx={{
                    color: 'black',
                    '&.Mui-checked': {
                      color: theme.colors.lightBlue,
                    },
                  }}
                />
              }
              label="1h"
              sx={{ margin: 0 }}
            />
            <FormControlLabel
              value="24h"
              control={
                <Radio
                  sx={{
                    color: 'black',
                    '&.Mui-checked': {
                      color: theme.colors.lightBlue,
                    },
                  }}
                />
              }
              label="24h"
              sx={{ margin: 0 }}
            />
          </RadioGroup>
        </FormControl>
      </CommonBox>
    </SettingsSection>
  );
}
