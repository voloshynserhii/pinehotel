'use client';

import Icon2Persons from '@/assets/icons/people.svg';
import IconAirc from '@/assets/icons/aircon.svg';
import IconBar from '@/assets/icons/minibar.svg';
import IconBed from '@/assets/icons/double.svg';
import IconMeasures from '@/assets/icons/size.svg';
import IconSofa from '@/assets/icons/sofa.svg';
import IconTowels from '@/assets/icons/toiletries.svg';
import IconTv from '@/assets/icons/tv.svg';
import IconWifi from '@/assets/icons/wifi.svg';
import IconPanoramic from '@/assets/icons/mountain-view.svg';
import IconGarden from '@/assets/icons/garden-view.svg';
import IconCountrySide from '@/assets/icons/hiking-routes.svg';
import IconPool from '@/assets/icons/pool.svg';
import IconTerrace from '@/assets/icons/terrace.svg';
import IconDine from '@/assets/icons/dine.svg';
import IconDesign from '@/assets/icons/rural-decor.svg';
import IconLight from '@/assets/icons/outdoor-sitting.svg';
import IconOutdoor from '@/assets/icons/outdoor.svg';
import IconLocalCuisine from '@/assets/icons/restaurant.svg';
import IconWine from '@/assets/icons/rural-cuisine.svg';
import IconGrill from '@/assets/icons/grill.svg';

import IconShower from '@/assets/icons/shower.svg';
import IconJakuzzi from '@/assets/icons/jacuzzi-bathtub.svg';

const PlaceholderIcon = (props: any) => (
  <svg
    width='66'
    height='66'
    viewBox='0 0 66 66'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='66' height='66' fill='currentColor' opacity='0.1' />
  </svg>
);

export const icons = {
  'icon-2persons': Icon2Persons,
  'icon-airc': IconAirc,
  'icon-bar': IconBar,
  'icon-bed': IconBed,
  'icon-measures': IconMeasures,
  'icon-shower': IconShower,
  'icon-jakuzzi': IconJakuzzi,
  'icon-sofa': IconSofa,
  'icon-towels': IconTowels,
  'icon-tv': IconTv,
  'icon-wifi': IconWifi,
  'icon-panoramic-view': IconPanoramic,
  'icon-garden-view': IconGarden,
  'icon-hiking': IconCountrySide,
  'icon-light': IconLight,
  'icon-design': IconDesign,
  'icon-terrace': IconTerrace,
  'icon-pool': IconPool,
  'icon-dine': IconDine,
  'icon-local-cuisine': IconLocalCuisine,
  'icon-wine': IconWine,
  'icon-outdoor': IconOutdoor,
  'icon-grill': IconGrill,
};

const Icon = ({
  name,
  ...props
}: {
  name: keyof typeof icons;
  [key: string]: any;
}) => {
  const IconComponent = (icons as any)[name];
  if (!IconComponent) {
    return <PlaceholderIcon {...props} />;
  }

  return <IconComponent fill='currentColor' {...props} />;
};

export default Icon;
