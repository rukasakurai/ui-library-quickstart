import { FluentThemeProvider, LocalizationProvider, COMPONENT_LOCALE_JA_JP, darkTheme, lightTheme, DEFAULT_COMPONENT_ICONS } from '@azure/communication-react';
import { Stack, registerIcons } from '@fluentui/react';
import React, { useEffect } from 'react';
import { CallingComponents } from './CallingComponents';
import { ChatComponents } from './ChatComponents';

function CompletedComponentsApp(): JSX.Element {
  const stackStyle = {
    root: {
      width: '100%'
    }
  };

  useEffect(() => {
    registerIcons({ icons: DEFAULT_COMPONENT_ICONS });
  }, [])

  return (
    <LocalizationProvider locale={COMPONENT_LOCALE_JA_JP}>
      <FluentThemeProvider fluentTheme={lightTheme}>
        <Stack horizontal horizontalAlign="space-evenly" styles={stackStyle}>
          <CallingComponents />
          <ChatComponents />
        </Stack>
      </FluentThemeProvider>
    </LocalizationProvider>
  );
}

export default CompletedComponentsApp;
