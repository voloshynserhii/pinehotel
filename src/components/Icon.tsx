import Icon2Persons from '@/assets/icons/icon-2persons.svg';
import Icon3Bed from '@/assets/icons/icon-3bed.svg';
import IconAirc from '@/assets/icons/icon-airc.svg';
import IconBar from '@/assets/icons/icon-bar.svg';
import IconBed from '@/assets/icons/icon-bed.svg';
import IconKettle from '@/assets/icons/icon-kettle.svg';
import IconKit from '@/assets/icons/icon-kit.svg';
import IconMeasures from '@/assets/icons/icon-measures.svg';
import IconPhon from '@/assets/icons/icon-phon.svg';
import IconSafe from '@/assets/icons/icon-safe.svg';
import IconShower from '@/assets/icons/icon-shower.svg';
import IconSofa from '@/assets/icons/icon-sofa.svg';
import IconTowels from '@/assets/icons/icon-towels.svg';
import IconTv from '@/assets/icons/icon-tv.svg';
import IconWifi from '@/assets/icons/icon-wifi.svg';
import IconWindow from '@/assets/icons/icon-window.svg';
import IconKitchen from '@/assets/icons/icon-kitchen.svg';
import IconLight from '@/assets/icons/icon-light.svg';
import IconDesign from '@/assets/icons/icon-design.svg';
import IconWorkspace from '@/assets/icons/icon-workspace.svg';
import IconRobes from '@/assets/icons/icon-robes.svg';
import IconBt from '@/assets/icons/icon-bt.svg';
import IconTerrace from '@/assets/icons/icon-terrace.svg';
import IconPool from '@/assets/icons/icon-pool.svg';
import IconDine from '@/assets/icons/icon-dine.svg';

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
  'icon-3bed': Icon3Bed,
  'icon-airc': IconAirc,
  'icon-bar': IconBar,
  'icon-bed': IconBed,
  'icon-kettle': IconKettle,
  'icon-kit': IconKit,
  'icon-measures': IconMeasures,
  'icon-phon': IconPhon,
  'icon-safe': IconSafe,
  'icon-shower': IconShower,
  'icon-sofa': IconSofa,
  'icon-towels': IconTowels,
  'icon-tv': IconTv,
  'icon-wifi': IconWifi,
  'icon-window': IconWindow,
  'icon-kitchen': IconKitchen,
  'icon-light': IconLight,
  'icon-design': IconDesign,
  'icon-workspace': IconWorkspace,
  'icon-robes': IconRobes,
  'icon-bt': IconBt,
  'icon-terrace': IconTerrace,
  'icon-pool': IconPool,
  'icon-dine': IconDine,
  'icon-kids': PlaceholderIcon,
  'icon-dining': PlaceholderIcon,
  'icon-storage': PlaceholderIcon,
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
