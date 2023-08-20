import { Fragment } from 'react'
import { Menu } from '@headlessui/react'

export const DropDown = () => {
  return (
    <Menu>
      <Menu.Button className={"bg-red-600 text-2xl px-20"}>More</Menu.Button>
      <Menu.Items>
        <Fragment>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                // className={`ui-active:bg-red-600 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black block`}
                href="/account-settings"
                // href=""
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item
            as={"a"}
            className={"ui-active:bg-red-600 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black block"}
            href="/documentation"
          >
            Documentation
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Fragment>
      </Menu.Items>
    </Menu>
  )
}


const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

export const DropdownDemo = () => {
  return (
    <Menu>
      <Menu.Button className={"bg-red-800 text-2xl px-20"}>Options</Menu.Button>
      <Menu.Items className={"flex flex-col gap-y-2 text-center"}>
        {links.map((link) => (
          <Menu.Item
            as="a"
            key={link.href}
            // href={link.href}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black block"
            // menu does not have selected or checkked options, cause tehy are not semantically aligned with those kinds of functionalities
            // ui-selected:bg-red-600 ui-not-selected:bg-red-800 ui-checked:bg-red-400
          >
            {link.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}