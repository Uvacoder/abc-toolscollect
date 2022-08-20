import { Group, Text, UnstyledButton } from '@mantine/core'
import React from 'react'

import { useStyles } from '@/components/Layout/Footer/Footer.styles'
import { List } from '@/components/Layout/Footer/List'
import Link from '@/components/Link'

export const Footer = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Text>&copy; {new Date().getFullYear()} 小康</Text>

        <Text>Made with ❤️ in Hong Kong</Text>

        <Group spacing={8} position='right' noWrap>
          {List.map((item, index) => (
            <UnstyledButton
              key={index}
              component={Link}
              href={item.href}
              noIcon
              className={classes.icon}
            >
              <item.icon size={18} />
            </UnstyledButton>
          ))}
        </Group>
      </div>
    </div>
  )
}
