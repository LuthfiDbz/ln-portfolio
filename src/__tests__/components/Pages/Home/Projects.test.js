import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import Projects from '../../../../components/Pages/Home/Projects'

jest.mock('axios')

describe('Projects Component', () => {
  const mockProjects = [
    {
      names: 'Project 1',
      tech: ['React', 'Redux'],
      desc: 'Description 1',
      link: 'https://project1.com',
      imageLink: 'https://example.com/project1.jpg',
    },
    {
      names: 'Project 2',
      tech: ['Next.js', 'TailwindCSS'],
      desc: 'Description 2',
      link: 'https://project2.com',
      imageLink: 'https://example.com/project2.jpg',
    }
  ]

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockProjects })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('fetches and displays projects', async () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    )

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_URL}/api/projects`)

    await waitFor(() => {
      mockProjects.forEach(project => {
        expect(screen.getByText(project.name)).toBeInTheDocument()
        expect(screen.getByText(project.desc)).toBeInTheDocument()
      })
    })
  })

  test('renders correct number of projects', async () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    )

    await waitFor(() => {
      const projectElements = screen.getAllByText(/Visit Page/i)
      expect(projectElements.length).toBe(mockProjects.length)
    })
  })

  test('handles empty projects array', async () => {
    axios.get.mockResolvedValue({ data: [] })

    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.queryByText(/Visit Page/i)).not.toBeInTheDocument()
    })
  })

  test('handles API error', async () => {
    axios.get.mockRejectedValue(new Error('API Error'))

    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.queryByText(/Visit Page/i)).not.toBeInTheDocument()
    })
  })
})
