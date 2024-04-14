import classNames from 'classnames';
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: 'Menu 1',
      submenu: [
        {
          id: 2,
          title: 'Submenu 1-1',
          submenu: [
            {
              id: 3,
              title: 'Submenu 1-1-1',
              submenu: [
                {
                  id: 3,
                  title: 'Submenu 1-1-1-1',
                  submenu: []
                },
              ]
            },
            {
              id: 4,
              title: 'Submenu 1-1-2',
              submenu: [
                {
                  id: 3,
                  title: 'Submenu 1-1-2-1',
                  submenu: []
                },
                {
                  id: 4,
                  title: 'Submenu 1-1-2-2',
                  submenu: [
                    {
                      id: 4,
                      title: 'Submenu 1-1-2-2-1',
                      submenu: []
                    },
                  ]
                },
              ]
            }
          ]
        },
        {
          id: 5,
          title: 'Submenu 1-2',
          submenu: []
        }
      ]
    },
    {
      id: 6,
      title: 'Menu 2',
      submenu: []
    },
    {
      id: 7,
      title: 'Menu 3',
      submenu: [
        {
          id: 1,
          title: 'Submenu 3-1',
          submenu: []
        },
      ]
    }
  ]);

  return (
    <>
       <div className='nested-menu'>
       <ul className={classNames('flex gap-5 justify-center items-start mt-10')}>
        {
            menu.map((item) => (
              <Menu
                key={item.id}
                title={item.title}
                submenu={item.submenu}
              />
            ))
          }
        </ul>
       </div>
    </>
  )
}

function Menu({ title, submenu }) {
  return (
    <li className='border border-zinc-400 p-4 menu-item'>
      {title}
      {
        submenu.length > 0 && (
          <ul className='submenu'>
            {
              submenu.map((item) => (
                <Menu
                  key={item.id}
                  title={item.title}
                  submenu={item.submenu}
                />
              ))
            }
          </ul>
        )
      }
    </li>
  )
}

export default App
