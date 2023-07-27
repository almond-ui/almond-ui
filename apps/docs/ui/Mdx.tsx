'use client';

import {
  ComboboxShowcase,
  ComboboxShowcaseProps,
} from '@/ui/configurators/components/Combobox.showcase';
import {
  DrawerShowcase,
  DrawerShowcaseProps,
} from '@/ui/configurators/components/Drawer.showcase';
import {
  DropdownShowcase,
  DropdownShowcaseProps,
} from '@/ui/configurators/components/Dropdown.showcase';
import {
  ModalShowcase,
  ModalShowcaseProps,
} from '@/ui/configurators/components/Modal.showcase';
import {
  PopoverShowcase,
  PopoverShowcaseProps,
} from '@/ui/configurators/components/Popover.showcase';
import {
  ProgressShowcase,
  ProgressShowcaseProps,
} from '@/ui/configurators/components/Progress.showcase';
import {
  RibbonShowcase,
  RibbonShowcaseProps,
} from '@/ui/configurators/components/Ribbon.showcase';
import {
  SelectorShowcase,
  SelectorShowcaseProps,
} from '@/ui/configurators/components/Selector.showcase';
import {
  TableShowcase,
  TableShowcaseProps,
} from '@/ui/configurators/components/Table.showcase';
import {
  TabsShowcase,
  TabsShowcaseProps,
} from '@/ui/configurators/components/Tabs.showcase';
import {
  ToastShowcase,
  ToastShowcaseProps,
} from '@/ui/configurators/components/Toast.showcase';
import {
  TooltipShowcase,
  TooltipShowcaseProps,
} from '@/ui/configurators/components/Tooltip.showcase';
import { CustomMdxSandpack } from '@/ui/CustomMdxSandpack';
import {
  Accordion,
  AccordionItemProps,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardImageProps,
  Checkbox,
  FormControl,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Ribbon,
  Select,
  Switch,
  Table,
  Text,
  Textarea,
  Toast,
} from '@almond-ui/core';
import {
  At,
  ChartLineDown,
  ChartLineUp,
  Key,
  MagnifyingGlass,
  Rocket,
  RocketLaunch,
  WarningCircle,
} from '@phosphor-icons/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { View } from './View';

const components = {
  h1: ({ ...props }) => (
    <h1
      className='group mt-8 scroll-mt-[7rem] text-3xl font-semibold text-gray-800'
      {...props}
    >
      <a
        href={`#${props.id}`}
        className="before:invisible before:-ml-6 before:mr-1 before:text-blue-200 before:content-['#'] group-hover:before:visible"
      >
        {props.children}
      </a>
    </h1>
  ),
  h2: ({ ...props }) => (
    <h2
      className='group mt-8 scroll-mt-[7rem] text-2xl font-semibold text-gray-700'
      {...props}
    >
      <a
        href={`#${props.id}`}
        className="before:invisible before:-ml-5 before:mr-1 before:text-blue-200 before:content-['#'] group-hover:before:visible"
      >
        {props.children}
      </a>
    </h2>
  ),
  h3: ({ ...props }) => (
    <p className='mt-8 text-xl font-semibold text-gray-700' {...props} />
  ),
  h4: ({ ...props }) => (
    <p className='mt-8 text-lg font-medium text-gray-700' {...props} />
  ),
  p: ({ ...props }) => (
    <p
      className='mt-4 text-base leading-normal text-gray-700 md:leading-relaxed'
      {...props}
    />
  ),
  a: ({ ...props }) => (
    <a
      className='text-blue-800'
      target={
        props.href && props.href.startsWith('http') ? '_blank' : undefined
      }
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul className='mb-6 ml-6 mt-3 list-disc text-gray-700' {...props} />
  ),
  pre: ({ ...props }) => (
    <div className='mt-4 overflow-auto'>
      <CustomMdxSandpack {...props} />
    </div>
  ),
  code: ({ ...props }) => (
    <code
      className='rounded border border-blue-100 bg-blue-50/75 px-[0.3rem] py-[0.15rem] font-mono text-sm font-medium text-blue-900'
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className='my-2 border-dashed border-gray-200' {...props} />
  ),
  table: ({ ...props }) => (
    <Table
      {...props}
      className='my-6'
      borderStyle='dashed'
      headerColor='white'
      stripePosition='odd'
    />
  ),
  tbody: ({ ...props }) => <Table.Tbody {...props} />,
  thead: ({ ...props }) => <Table.Thead {...props} />,
  tr: ({ ...props }) => <Table.Tr {...props} />,
  th: ({ ...props }) => <Table.Th {...props} />,
  td: ({ ...props }) => <Table.Td {...props} />,
  option: ({ ...props }) => <option {...props} />,
  Callout: ({ ...props }) => (
    <Alert {...props} size='sm' color='blue' tone='light' className='mt-6' />
  ),
  Alert: ({ ...props }) => <Alert {...props} />,
  Avatar: ({ ...props }) => <Avatar {...props} />,
  AvatarGroup: ({ ...props }) => <Avatar.Group {...props} />,
  Accordion: ({ ...props }) => <Accordion {...props} />,
  AccordionItem: ({ anchor, ...props }: AccordionItemProps) => (
    <Accordion.Item anchor={anchor} {...props} />
  ),
  AccordionHeader: ({ ...props }) => <Accordion.Header {...props} />,
  AccordionBody: ({ ...props }) => <Accordion.Body {...props} />,
  Badge: ({ ...props }) => <Badge {...props} />,
  Button: ({ ...props }) => <Button {...props} />,
  Card: ({ ...props }) => <Card {...props} />,
  CardHeader: ({ ...props }) => <Card.Header {...props} />,
  CardImage: ({ src, ...props }: CardImageProps) => (
    <Card.Image src={src} {...props} />
  ),
  CardBody: ({ ...props }) => <Card.Body {...props} />,
  CardFooter: ({ ...props }) => <Card.Footer {...props} />,
  Checkbox: ({ ...props }) => <Checkbox {...props} />,
  Text: ({ ...props }) => <Text {...props} />,
  Input: ({ ...props }) => <Input {...props} />,
  InputGroup: ({ ...props }) => <InputGroup {...props} />,
  InputGroupText: ({ ...props }) => <InputGroup.Text {...props} />,
  InputGroupInput: ({ ...props }) => <InputGroup.Input {...props} />,
  InputGroupSelect: ({ ...props }) => <InputGroup.Select {...props} />,
  InputGroupTextarea: ({ ...props }) => <InputGroup.Textarea {...props} />,
  InputGroupButton: ({ ...props }) => <InputGroup.Button {...props} />,
  FormControl: ({ ...props }) => <FormControl {...props} />,
  FormControlLabel: ({ ...props }) => <FormControl.Label {...props} />,
  FormControlText: ({ ...props }) => <FormControl.Text {...props} />,
  FormControlInput: ({ ...props }) => <FormControl.Input {...props} />,
  FormControlSelect: ({ ...props }) => <FormControl.Select {...props} />,
  FormControlTextarea: ({ ...props }) => <FormControl.Textarea {...props} />,
  Textarea: ({ ...props }) => <Textarea {...props} />,
  Select: ({ ...props }) => <Select {...props} />,
  Radio: ({ ...props }) => <Radio {...props} />,
  RadioGroup: ({ name, ...props }) => <RadioGroup name={name} {...props} />,
  Ribbon: ({ ...props }) => <Ribbon {...props} />,
  Switch: ({ ...props }) => <Switch {...props} />,
  Toast: ({ ...props }) => <Toast {...props} />,
  ToastShowcase: ({ showcase }: ToastShowcaseProps) => (
    <ToastShowcase showcase={showcase} />
  ),
  DropdownShowcase: ({ showcase }: DropdownShowcaseProps) => (
    <DropdownShowcase showcase={showcase} />
  ),
  DrawerShowcase: ({ showcase }: DrawerShowcaseProps) => (
    <DrawerShowcase showcase={showcase} />
  ),
  SelectorShowcase: ({ showcase }: SelectorShowcaseProps) => (
    <SelectorShowcase showcase={showcase} />
  ),
  TooltipShowcase: ({ showcase }: TooltipShowcaseProps) => (
    <TooltipShowcase showcase={showcase} />
  ),
  PopoverShowcase: ({ showcase }: PopoverShowcaseProps) => (
    <PopoverShowcase showcase={showcase} />
  ),
  TabsShowcase: ({ showcase }: TabsShowcaseProps) => (
    <TabsShowcase showcase={showcase} />
  ),
  TableShowcase: ({ showcase }: TableShowcaseProps) => (
    <TableShowcase showcase={showcase} />
  ),
  ModalShowcase: ({ showcase }: ModalShowcaseProps) => (
    <ModalShowcase showcase={showcase} />
  ),
  ProgressShowcase: ({ showcase }: ProgressShowcaseProps) => (
    <ProgressShowcase showcase={showcase} />
  ),
  RibbonShowcase: ({ showcase }: RibbonShowcaseProps) => (
    <RibbonShowcase showcase={showcase} />
  ),
  ComboboxShowcase: ({ showcase }: ComboboxShowcaseProps) => (
    <ComboboxShowcase showcase={showcase} />
  ),
  View: ({ ...props }) => <View {...props} />,
  MagnifyingGlass: ({ ...props }) => <MagnifyingGlass {...props} />,
  RocketLaunch: ({ ...props }) => <RocketLaunch {...props} />,
  ChartLineUp: ({ ...props }) => <ChartLineUp {...props} />,
  ChartLineDown: ({ ...props }) => <ChartLineDown {...props} />,
  Rocket: ({ ...props }) => <Rocket {...props} />,
  At: ({ ...props }) => <At {...props} />,
  Key: ({ ...props }) => <Key {...props} />,
  WarningCircle: ({ ...props }) => <WarningCircle {...props} />,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className='mdx'>
      <Component components={components} />
    </div>
  );
}
