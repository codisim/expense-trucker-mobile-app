import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';


export default function TabLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const colorSchema = useColorScheme();

  const isDark = colorSchema === 'dark';
  const tabInColor = isDark ? '#c5c0ff' : '#584de0';


  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href={"/(auth)/sign-in"} />
  }

  return (
    <NativeTabs tintColor={tabInColor}>

      <NativeTabs.Trigger>
        <Label>Stats</Label>
        <Icon sf={{ default: "chart.bar", selected: "chart.bar.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger>
        <Label>Add</Label>
        <Icon sf={{ default: "plus.circle", selected: "plus.circle.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger>
        <Label>Expense</Label>
        <Icon sf={{ default: "creditcard", selected: "creditcard.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger>
        <Label>Profile</Label>
        <Icon sf={{ default: "person", selected: "person.fill" }} />
      </NativeTabs.Trigger>

    </NativeTabs>
  )
}