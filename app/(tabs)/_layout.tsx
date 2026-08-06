import { useAuth } from '@clerk/expo'
import { Redirect } from 'expo-router'
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs'


export default function TabLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href={"/(auth)/sign-in"} />
  }

  return <NativeTabs>

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
}