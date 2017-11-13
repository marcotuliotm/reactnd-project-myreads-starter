import React from 'react'
import { shallow } from 'enzyme'
import BookView from '../BookView'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });



/* Test book data needed for the Jest & Enzyme suite */
const testBooks = {
	books: [
		{
			title: 'A Book Titled 1',
			subtitle: 'A Subtitle',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			authors: ['Author One', 'Author Two'],
			imageLinks: { thumbnail: 'http://cover.gif' },
			id: 'nggnmAEACAAJ',
			shelf: 'wantToRead'
		},
		{
			title: 'Book 2: Electric Boogaloo',
			subtitle: 'Another Subtitle #2',
			description:
				'Suspendisse facilisis varius sem, ut auctor sem pulvinar sed.',
			authors: ['Guy Three', 'Guy Four'],
			imageLinks: { thumbnail: 'http://pic2.jpg' },
			id: 'sJf1vQAACAAJ',
			shelf: 'read'
		},
		{
			title: '3: The Threequel',
			subtitle: 'The 3rd and Final Subtitle',
			description:
				'Maecenas justo nunc, lobortis et volutpat vel, tempor quis tellus.',
			authors: ['Writer Five', 'Writer Six'],
			imageLinks: { thumbnail: 'http://bookCover.png' },
			id: 'bKs2xWEECBAL',
		
		}
	]
};


describe('<BookView />', () => {
  it('BookView should be defined', () => {
    expect(BookView).toBeDefined()
  })

  it('BookView should be defined', () => {
    const component = shallow(<BookView book={testBooks.books[0]} onUpdateBook={()=>true} />)
    expect(component).toBeDefined()
	})
	
	it('BookView should be defined and shelf=none', () => {
    const component = shallow(<BookView book={testBooks.books[2]} onUpdateBook={(e)=>true} />)
    expect(component).toBeDefined()
  })
})