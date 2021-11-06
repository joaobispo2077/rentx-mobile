import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import AccelerationIcon from '../../assets/acceleration.svg';
import AutoIcon from '../../assets/exchange.svg';
import ForceIcon from '../../assets/force.svg';
import GasolineIcon from '../../assets/gasoline.svg';
import PeopleIcon from '../../assets/people.svg';
import SpeedIcon from '../../assets/speed.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { CarStat } from '../../components/CarStat';
import { ImageSlider } from '../../components/ImageSlider';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import {
  CarImage,
  Container,
  Header,
  Content,
  Details,
  Identity,
  Brand,
  Model,
  Pricing,
  Period,
  Price,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceTitle,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  CarStatList,
  CarStatItem,
  Footer,
} from './styles';

type SchedulingDetailsScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'SchedulingDetails'
>;

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<SchedulingDetailsScreenNavigationProps>();

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToSchedulingComplete = () => {
    navigation.navigate('SchedulingComplete');
  };

  const imagesURL = [
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMWFRUVFhUYFxUWFhYWGhcXFxgXFxUWFxYdHSggGBolHRcXITEhJSotLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0vLS0tLS0tLS0tLS0vMC0tLy8tLS0tLS0tLS0tKy0tLS0tLS0tLS8tLS0tLf/AABEIAJkBSQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABGEAABAwICBQoCBwcDAwUBAAABAAIDBBESIQUGMUFRBxMiMmFxgZGhsVLRFCNCYnKSwTNTgqKy4fAVQ8IWc9IkNERj8Qj/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAMhEAAgECAQkHBAIDAAAAAAAAAAECAxEEBRIhMVFxkaHRMkFhgbHB8BUiQuEUUhMj8f/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAItCq0tBH15WA8MQJ8hmomfXKmbs5x/a1oA/mIVU69OHakl5l1PDVqnYi35aOJZUVJm17+CH8z/0A/Vab9eKg9WOMeDj/AMlneUMOvy5Poao5LxL/ABtva6nQkXNXa5Vf3B/B/dYzrdWfG38jfkofUqPjw/ZZ9HxG2PF9DpyLmQ1wrPiaf4AsrNd6obWxO72uHs5erKVB7fnmHkjEeHF9DpCKhQa+yfbgafwuLfcFbcOvcf2oXjuc13vZWRx1B/l6lUsmYmP480/cuSKsxa60p2iRve2/9JK34NY6V2yZo/FdvuArY4ilLVJcUUSwleOuD4Ml0Wm3SMB2TRnue35r5pCnMsZYyZ8RNvrIubxCx2DG1zc9mxXLTqKGnHXoNp7wBckAcTktGbTVMzrTxj+Np9AoWp1Fgmt9Inq57fHUyNH5Y8DR4BfGcnGiwLGlD/8AuSSyf1vKHhtVOu2j2daoZ7e9lAu5XtGXIDpnAG2IROw+B4dqgeV/ROj6DR55ijp2TTPbHG8RtxNHWe4OtcHCCL/eWPkU1PpZtHfSKmCOV0sshY57QS1jLMsDtHSa8oC902vVFJ1ZWnufEfQPupCLWGB2wu/I4/03UXU8nWjHixprfglmZ/S8KMm5JNGnqCWM/E14cfN7XIC2t0zB+8A/EHN9wFni0hC7qysPc5vzXMNZ9RG0NJNVR6QrBzLC4NMgAJ2Nb0MAzJA8VRdR9BVulefeyoIdE6MkvleMZdiNsWF1gMOzK+JAfpIFfVyiGpqaSzayJ8BGQqIb4DuGJoc4Z5bHEn4QrbovWQjCJyHMd1Z2Wt/HbLxHiAgLUiIgCIiAIiIAiIgCIiAIiIAi8k2zKpes3KXQUd2h/PSD7EVjnwc7YPVeN2PUm9RdlCaf1roqIXqZ2MO5l8Tz3Mbdx8lwvWblXr6m7Y3CmjO6PrEdshz8rKoaO0ZU1biYY3Puc5HZNvxLztPmU0saDq2n+W/a2ip+NpZz6iJpz8XDuXO9KcoOk6h1nVT89kcYa1vcGNbn43KuOrfI5JJZ9VIbfC27W+ZGJ3gAun6B1GoaQfVxNJ42tfvO0+JKNJ6HpCk07rQcO0LQacqD9UJQDvkbGB4gtv6KxzaL0jTENqKqmL8vqgwvfnxDMIb4ldwaQ0WaABwAsFFac0YJwLENc05OtfI7QVS8NRatmLguhesZiFqnLi+pQqDRNVIzGIgR2HCTxs25I8V4npZo+vBIO211OzaAmj6XORDtLnNt42UudZKeJjWvqGvc1oBLbvuQMz0bquWBoP8AHm+pfHKeKj+V96X/AHmc++nRXs7E38TSPVbMTo3dVwPcQtOq0kDI97cwXvIxDcXG1x+iiKyWO13Ad9s79ls7qiWTKb7La4M0QyzVXainxXX0LRzI4JzY4KuaNpJmu518r4ohngc65IHxA5NHr3LDpXW0A4YG4z8Rvh8BtPosH8WTnm02peK1Lz1HV/mxjTz6qcdielvclp4pFoIC0qnStPH15GA8Li/kM1QqqoqJv2kht8N7D8oyWOPR7d9/ZbIZM/tLh1fQ59TLOn7I8X7LqXCXWqkGxxd3Md+oC1364QbmSH+Fo/5KvNo2fD55rJ9FbswjyV6ydR778f0ZnlbEd1l5fsmDrjD+5kPg3/yXka7RNOUU7e1uH9HKtkGN9+G3tHH/ADepmKxtkCD2J9OobDz6tidq4E1S8qTQ4Dn52ccdzbLgSVadGcopeQG1Ebz8L2hrj4dE+i5bp3QjZGl7BY7wqiwvaTGRi+6RfPdYbjdT/iW7E5J778iH8++mpCDW6z4nZeUGil0q6Jz5OaETXBrWtLgS4jE43cM8gPBWHUrTb6CjipZGc7zWIB7SGXaXFwBbY5i5G1ci0LBpCIYhK5g3Ru6Y/Ker4KwUus0zMqiG4+OL3Mbj7FY51MRF2jUUuHS3Bs306OEnplScfN+z0eaR2GPXiD7UcrfBp/5LYi1xpDte5v4mO/QFc10fpOKcXjcHW2jMObf4mnMLZIHBV/z68XZ281+y36Zhpq8b+T/TNvlr1kido8QwyB5llbitfJjOncjd0gxa3/8AO08fMVTMQ53nWuLb54MADXD+IPCxuY1YRSNBxNAB4gWPmrY5TaX3Q4P9e5TLI0b/AGz0eK6Neh2eSMEEEAg5EHMEcCFA/wDSMAkxML42E3fCwgRPI2XaQS3ZsaQLZKiUukqiI/VzPFt2IkflOStOhdcCSG1AABsOcblmcukOHaFfSyhTm7STXpxMtfJdWmrxalu18C6IiLecwIiIAiIgCIiAIorSGnaeC4fIMQ+w3pO8QNniqrpLXSR1xC0Rt+I2LvkPVZq2LpUtEnp2LS/m810MDXraYx0bXoX78ky9vkABJIAG0nIDxVE1s5UqOkuyM89Lua3q37947su1ULXJlVURlzJXukbiyJxYmnaG32HuXIahpDswQd4N7g8EoV1iI50dG1a30XP1GJw38WSjPTfU9S6vl5pl91p5Qa2tuHSFkf7tnRHjvPiqrT0s02LmY3Pw7SLeXaewL5ouilmNsNxvOy3ediv+rtNS01nFrnSfEQMI7hf1K0JJajK5N6ytaD1KnqAJJTzUe0uffZxDdpX6G0HQ0NJBGI3xlrWNDZHObmALXG5c/dpWJ+WNtjuOXoUD2jqgDuAXp4dGqdaKZv8AuYj9xrnetreqi6nXVg6kTj+JzW+2JUl861pJ0BaanXKc9URs8C4+ZNvRQ9VrDUP607+5pDP6QFCyTLXkmQG3PU3NzmeJzPmVrSVK1JJlnoNHvm6RuyPjsc4fd4D73lxVdSrGnHOm7ItpUZ1ZZsFdmJrnyOwRjEd5OTW/iP6bVtzPhpBjkPOTWy4/wj7De3b3rXr9ONjHMUjQSNrh1W8SPiPafVQDoi17ZHOLi51nE78Wz19lmzamI0z+2Ozve/57GxzpYXRTtKf9u5btr+eBs11VNUG8pwt3RjYO/t78+5eGxAZAWC2sF+/3WGqnazInPgNv9lrjFRVoqyME5ynLOk7s8hizNatNukG/CfT5rPFXMNhci/FSImzgX3ChkaDa9z8Izd+UZrbh0fM/qx4RxkOH0zd5gKE6kIK82kTp0alTsJvd11EVXwXbfht7t616GtDAWuvkcrb+z/OKtkOgP3khP3WDCPEm58rKRo9HQxfs42tPG1z4uOZWOplGlHspvl84HRpZJrS7bUeb5aOZWqehqZx1eaYd79p/h2n0U5o/QcURxgYpDte4C/hwUhg4Zd3y2IXEbRccR8lzq2LqVVa9lsXzT6eB1cPgaVB3Su9r9u7lfxPDoRwWvLRNdlYd6yyVbdxv3fNYvpN9qoimaZNaj7QaPjiuWDpO2uO09nYFuhagnCfSBxUmrkU0jasvi1n1rWi5OSrOk9bHZiJt/Eepz9ApQozqO0VcjUxEKSvN2LY5y1a+ezSOwqh/9ZTsd9Yw24h2L3CnqfSrKiPEw33Hs7CNxU6mFqU1eSKqeMp1naD9j9DUb8UbCdpa0+YC2FGavVrJqaKSM9EsA7i3ouB7QQR4KTXfTurny7VnZhERengRFS9Z9cRG409LZ8o679rYr7vvScG7BtPAxnOMFnS1E4U5TkoxV2ywaY01DTNvI7pHqsGbneG4dpyVF0trPPPcNPNR/C05kfedt8rKGe5z3F73Fzjtc43JX1cDEY+pV0R0Ln5v2R9NhMm0qOmX3S8dXkvdgNRF6DFhS2HSPNljno45BZ7GvH3mg+62Q1elNRPHpVmRDtW4PsB0f/be5o/L1fRaL9V5B+zqXd0jGu9RZWZFpjiq0NUn56fUyTwWHnrgvLR6WKhNoWqb9lj+1j7H8rgPdY2aLqhmI3N/iZ+jlc7Ir45Rq96T8ujMsskUG9Da8+qKf9GrR9lx7yw+5Xksrf3RPgP0Kud18spfUqmxc+pD6PR/tLl0KU5lZvgP+eKwOZVH/wCO7yKvuFCE+qVP6rn1PHkal/Z8uhXNFaEOT6ixO0Rjqt/F8R7Niway/S33ZHGRHvLSC53eAbgdn/4rOQvDgqFipupnySb8dS3Gp4KCpf4oNpPXbW97+eFkc/hcyMYSCw8HgtJXuswuicARfaCCNyu8liLOAI4HP0UZUaKpzmYm7dwtty3d66Ecop9qPB39TlzyS12Z8V0K3XTOEONtgS0EXNr3GwHjwVU/1cfAfNdSio42dRjW9wF/Nc/0pqhUhznMwyAkno2ac8+qf0JV1LGQm2no39/zeZ6+T6lNJrTtstXvyI//AFM7oj/ngtihbVTvbHHGW4jbEWmwG9xJysFddSIqlkTo6hpaGkc2SQTY3u3I7Bl5qwulaNpVVXHOMnFJb7/ovo5NU4qUpPdaz9T7RUzY2hrAAAAMgBe2823rYCj36RaNmfotSXSTjsNu5crNbdztZ6Ssibc4DabLVkrmDffuUHJUE7TdYXTJmIi6rJefSpHBvaTdaMtaXbSSO3IeAWhzgGweP91jfKrFFFbmzeimyHcFlE6jRKvolSx4mSXPryahaHOLDW1OFhPl3nYvVFt2R5Keam2aWntKknCDkMst54BQ1WBHbnnOu4XDGGwGdiHPzu4EZgbOK29GwF5km2thG07icnyDiW4gfG+5aRpsbjBaxPSaN4eDYjucPYHcu5SpqnHNR85WrSqzcn/xCGCORjnNdgOINa0lzmvJF7G46O/O52bNiw6KqnU89iC0E4XtO4g2z7QVN6qxNbVc44jmaFjpTfY6UWDGjiedLB3MUBpkONpH5vfixni4HM+vopSipJp95CE3CSku4/T/ACX3+gMv8ctu7Gf1urcufcjWlJKiicXtAayQNY4ZYrMZiAGzonK47eC6CvKatBLwJVnepJ7WwiKo676bMTRAw2e8Xc4fZZssO05+AK8q1Y0oOciVCjKtUUI9/LxInX3W8sH0eme0PfdplJsBYXdY8B2bSQO1VKipBG3CDfaS47XOO1x7Sn0djntkLQSwENJ3YrYyO+y9xdHonZ9k+zTw79/euDXxUq0bcfZLwXN6T6bDYKNCed3al7t+L5RtruzOvYYvmMDbfvsbedslla4EXBuOIWVRtpZuzth8AXpEUgfV8XwlffTtK8bPD6vgK1zWRXtjDj8LLvN+GFoJUfW6xMjcW83IXC1wW4bX+LeNvBWwoVZ9mLfl1M9TFUafaml5+y0kzZAFjlhlwg85E3E0ODQ10hsRcXuW4ciMiL9ixwNcAcby8k8A0AcAAPdKlGVPRNq+y93y6ntLEwq6Yp222sudm/JM2F8LxxCxOcFrT1YbvUFBsm6ljafO0ZkqA0trUyPosGJ3+bt3iofT+m3OPNsNuJ4dveoFkdmGUnDGNrrYnOJNui2+y+WI5X4nJdHDYFTWdPUcnGZScHmU9fe9nz54SNXrBVv6uFv4nO9hYLQOslZEbuAI4tLve/6KPk0tHfosB7X43k+T2t/lW5C+Iw8467HOcQ3AHFthtLmvcbjZsw7fBdH+NRtbNRyXjK7d89lh0Nrc2YhrsncDv7jv91PunGHbuyXLNKULonXILHZO3i4ObXtvnZWnV7ShljFz0m5H5+PzWHE4VU/vjq9DpYTGyq/ZPX6lmkqOCx/SytAS5DuXkyLGbrm+6rcd6wOmWqZF5dIlhc2XSrC6VYC9eC9e2I3MzpV4dIsDpFjdIvbHmcZnSLxzi06ira0Ek7PFR3+vNvYNdbjl7XV8KE5akZ6mJpw0N+5PCRew9Q8Wkw7YW92YK2G1h+HyP9lJ4WrsIRxtF9/JkjiUVp+pwhg4knyH91sNrBvBCgdYalrnNwm9gb+Klh6Mo1U5JkcVXhKi1GSd+pM0RLaB9jnL0bDMkucb99wR5LbiidG2J8z4y+KM4WMwklrhmyQ2xc4Rkc+iMwtLRUUs0UbIYnOPNkEtJ24nAm+xmQAvcZbxvm2VBpaWSTHE+eCop+hGWluA3DmX+1it0jnmRnkLdQ4xV62KmDMLKotJtiZzDwLjO2O5uAdmSy6wsYYonNc04pJeqQSM72cNrTmMitihpYZqrC+N92kStdA0FskeT2l8ZIAJbYdG2Zta+270Gpza/SMdK8OZHSRc7UnCGufJK/Fzdg44cQzvckC+9AdY5P8AB/p1KWQCnaYmuETSSG4s73OZxXxXOfSzzVjWOKMNAa0AAAAAbABsAWRAFy/XgH6W++8Mt3YR+t11Bcn5atPNo5aR3N4jIJQ+xscLCzDbtBcfNZMbRlVpZsdd7m/J2IhRrZ09TVr7CPaF7dcNJaLm2Q7VEaJ1kpZ7BkgDvgf0XeuR8LqfAXAzHCVpLifUKcakbwd1tVma9PG4DpOxHut/n+bdq+thI2OIzJtYHabndxK2A1egxeuTbueRgopLZtuzXwO4jy/uvQjd8Xos6+G6jckVTT9XURyYGSWBDS3oAude4dY22gjYBscFik0a/mWmpebvLnOMjnOcxou1jI4xmXE3cdgsGgkXKtkkAd1gDbZcAr61gbsAHcLLfRx0acUlDTt0K/JnLr5OnWm26jzX3Wb90vngRujqyZ4jjaGwwRixJH101h0Wu5sHA05A53tfMr3QaLjhJcOlIcy8gDMm/RaMmC/C57VsT1bRtIHio+fSrRsUqmNq1FZaN3XoRpZPoUnd/c/HVw6kk561JqsBQ8+kyVoy1RKyqBslUJaprlDaSrCGOdnYb91zkBfvWSOvLRk1l+JbcqE1j0o95ZG52V8Vsh2D3ctdCjCUkrvh73MGJxFSEW0lx9re5psaCenctAxy4esQT0WN+84/qdy+1pIkLwQcuj8JjI6LcOzAW2FvkvEbvq775HOce5vRaPPH5r1o+enc9rKkuEbXHC5ouSNrmcB0swTsuV2TgGOSJsgaWgEPFwDnhsbOv2A7+5SGr+hmVVTES60MRJlad0EN3Od3OLbHtkHFe6GlEbZMUb2RvLiHY2ueyMtu2PdjJfhBsN5vZZItB1UNNOSyRvOR4bAgYg44rEXuc91kBHaYrnVUk0zs+cJlb2NORb+UWtxaFpatSYZnM4g+mYW/oCkcQ1rgWkc4LEEHD0Dex3XJ81DaJNqlnj/SVXWV6cl4F2Hlm1YvxXPQXNj8kLlhY7Lz9185w8FxbH0FzKXLwXrE+QDaf0X0MeRcNsOLyI2+uZ8AVKNOUtSK51ow7T68NfI+ukWGWoA2myxzzwM/aTFx+GMYR+Z2Z8AtRusDW5U8IB+K2J35nX9lphhW9L5fLGSpi2tEVbe7cl93oSEcMzxdsZDfjecDe/Paj4Im5zTl/wB2PIeLzkoWeoqZTd7rd5xFYjQN2yPJ7zYLXDDqOpe/69TFUr53ak34L7Vyu35vcYtNVzJHBsUYYxvi5x4k/oo8Qu2kW71Kc/AzZbwF/Va0+kRsa3xPyWhGXR3Gs1hOwZcTkPNZ21WAWDi4+g/UrUklLtpv/nBeLFAZ5ql7trjbhu8lgevuA8CvhaeCAsOr9TPJGaSF5xOdiZEXENkJFnM2gYjYEX22I4LXkpKgNmjkje2RrmYmuaWFoFz0gbWAu058QodjiDcGxG9XGg180k5zA08/Ixpaxz4WTPAOG+ZaS7qjM3QF20fFT6OhOkJxmQ0RsNsUr4x0GMG5gcMZPG25oxdC5KtESRUz6mo/9zWSGaa/2b/s4xwDQdm4uI3Lmeo+q1fU1DKqtppn4P2YlAjYzO98LrbDsAFgu+UjC1jQQAQMwM0BnREQGGonbGxz3uDWsaXOcTYNaBckncAF+X+VXXhuk6lhijtDBjbG518UmIjE5w3A4RYbeO2w/UE8LXtLHtDmuBDmuAIcDkQQciCNy45yo8lT5ZBVaOijADA19MxrIsxfps2NJsRcGxyyvsQHDQGns9R5rfotK1UP7GZ4A3B2Jv5cx6LLLq/UNJaYZGuabOYWOxNPa3rN8l9kpBC2zwQ47b3BHYB815KKkrNXJRk4u8XZ+BJ0/KDXMyJjf+Jmf8pCyHlIrD9mH8rv/JVl8wOwXHaL/wB1nbTseLtHzCoeEoP8EaFjsQvzZNu5Qq3/AOodzPmVgfr3Xn/daO5jPkoSSjI2HzWB0DhuPhmvVhqK/BHjxld65viWmPTVfNYMqJC5w2ANHsBko2r0nXQvtLLKCNznEgjs3Edym9QK1vTgcAHnpNO8gbW+G3xKsekNHxzNwSNDhu4g8QdxWWpVhSqZrgrbtO8206FSrSU1Ud974FY0Xp8S2a/ov9D3H9FKmRVbTWrckF3Nu+PiNrfxD9R6L1ofTRyjkPYHH2PzUamHjJZ9LStnz0JUsVKMv8dZWe356lmL1ic5eMa98y7baw4nL3WM3XZ4LlWtNy/+oHY0D3P6qxutxuqpp02nJ7G+y2YNf7PIw49/6vNExFTOMUTrWYWHpE2bk92L13bStvQ9cIMfN4GuII52VgfhvmSxlic7kWFyfbW0HTc/CBz0cQhc7Hzr8IwPza5osS4ghwsB9oLfnfRxNHNYp5domPQY22zBH9rjd3DcumcclH6MjbIyOZ8gEsZljsGA4rl74Tnm68VsjhGQBuReOnix0rzTuM7nki0Yc4gEm3QtiYcGZuLZbStPWPTQlFK4dGSKCJrScyHRuIDr9pF1mEE0tUIITzLW/WPewkc21wDnkuG1rb2A42XiVgbWrlBJFAZi+WLm45nyNzAwg4WMc1wsL4XHiclUNDtvUN7MXo0rpHKXK2lpI4ccvP1BxuY6V55uAZNa5l8OI2F778fALldPM5pJDi0kWu3aRtPsF5OOdFraidOWbJS2O5cnyho6RDdubiG+m0+AK0pdNQjK7nngwYR+Y5nyCrWMXvhLjxcT7D5rKx0h6ow/hAHrtVEcLBeJonjakvDd8uTH+rTH9lG2L7x635ndLyK0ZpC43lnud4Bv6rEzRsz9oJ781K0OplRJ1WOPcCr1FIzZ8rWv8+eZECeFuxhceJR2lHfZaB6roGjOSKskzMZA+8Q33Vp0byKn/dkY3uuSpETiRnmdvPhl7IzR8jvslfpWg5J6JnXLn+TQrFRam0UXVgaTxdmgPyzR6r1EnVY49wJVhoOS+tk2QvtxIsv07DSxs6jGt7mgLOgOAUHInUu65Yzvdf2Cs+jeRaBv7WW/Y0fqV1hEBSqLkw0bHtiLz94qVj1L0eNlLH4i6sCICEi1ToGm4pIL9sbT7hSlNSxxi0bGsHBrQ32WdEAREQBERAEREBRtbtDF5LpGh23C7eO521p7lzPStHKy4YcTfhkGMeBOfndfoGSMOFnC4O4qt6U1RZJcsIHYfmgPzxWugJ+tpWg/Ezo+1vZaXO0ovgGHtJJPjddh0zyeyOv9XftbYqjaV1De0nokd4QFSycLggjszWCaLgLqRqtVJmbAfDJR02jahvx+ZQGBskrHB7RZzSCDtsQul6G0kypiDwQHbHsvm12/Lgdy5k4Tje5YzLLx/lHyWfEYdVVsZqwuKdBvRdPuOrVDbC+Xi4NHmVWajRNHjxyZnfHEbMJ+882/lVO5+Xj6D5LyXSnefDL2VNPByhqnbcjTUx8J66ae939i9zaYaMoxHGPu2v5qNl0nHe7ni/btVV5h53E+a9s0bIdjT5KUcFBd7ISyjUfcuZOv03EN5PcFB6TqhK/EAQLAZ9izs0HMdjD5LIdXKj92fJXU6EIO6M1TE1KitLUY9BaSEEgc5okYQWyRnY+M9ZvYeB3EBXN+oAqGGo0VUCaE5mFzi2aI7cDmi9z78SqTJoSob/tO8AVv6K0JpLEHU9PVB258ccrT+do/VXFBI0uqtXM5rG08pfGA17TG+7emXWcbYWnC8O6RGSvLtL0ejoRK/DJUPs9tOw3c5wyjdMfshthYbjmATmImh1U1mnuCZ42vtidJUc3e2QxAOxmw7FZNWeRKRjhLV1LC7bhiaXZ7+m62fbZAc0q9H1lfM6eYOc+Q3ORsBsDQNwAyAU7ojksqpbfVutxOQ8yv0BonV2npwAxtyN7s/wCymEBxnRfIsRYyyNb2C5PyVp0fyWUUfWxP8gr6iAhaLVeji6kDO8i/upaOJreq0DuACyIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALw9gORAPfmvaICOqdC07+tG3wy9lFTalUrtzh5fJWZEBTJuTmldvPi1pWnJyWUx+1/IPmr+iA5+3kqpd7v5B81lZyX0Y2k+QCvaICoQcnVC37Lj4gfot6HUyib/ALIPeSrCiAjYtB0zerCwfwg+62PoEX7pn5G/JbSIDCymY3Yxo7mgLMiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID//Z',
  ];

  return (
    <Container>
      <Header>
        <BackButton onPress={handleNavigateGoBack} />
      </Header>
      <CarImage>
        <ImageSlider imagesURL={imagesURL} />
      </CarImage>

      <Content>
        <Details>
          <Identity>
            <Brand>Lamborghini</Brand>
            <Model>Huracan</Model>
          </Identity>
          <Pricing>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Pricing>
        </Details>
        <CarStatList>
          <CarStatItem>
            <CarStat title="380km/h" icon={SpeedIcon} />
          </CarStatItem>
          <CarStatItem>
            <CarStat title="3.2s" icon={AccelerationIcon} />
          </CarStatItem>
          <CarStatItem>
            <CarStat title="800 HP" icon={ForceIcon} />
          </CarStatItem>
          <CarStatItem>
            <CarStat title="Gasoline" icon={GasolineIcon} />
          </CarStatItem>
          <CarStatItem>
            <CarStat title="Auto" icon={AutoIcon} />
          </CarStatItem>
          <CarStatItem>
            <CarStat title="2 pessoas" icon={PeopleIcon} />
          </CarStatItem>
        </CarStatList>
        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={24} color={theme.colors.shape} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={10}
            color={theme.colors.text_detail}
          />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>20/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceTitle>Total</RentalPriceTitle>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleNavigateToSchedulingComplete}
        />
      </Footer>
    </Container>
  );
}
