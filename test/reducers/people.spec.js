import expect from 'expect';
import people from '../../src/reducers/people';
import { addPerson } from '../../src/actions';

describe('people reducer', () => {
  it('without action', () => {
    const result = people(undefined, {});
    expect(result).toEqual([]);
  });

  it('add person without state', () => {
    const person = {
      name: 'Sergey',
      email: 'isakovso@gmail.com',
      phone: '+79622410011',
    };
    const result = people(undefined, addPerson(person));
    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual('Sergey');
  });

  it('add person with state', () => {
    const person = {
      name: 'Alex',
      email: 'alex@gmail.com',
      phone: '+79403445456',
    };
    const result = people([{ id: '3233' }], addPerson(person));
    expect(result.length).toEqual(2);
    expect(result[1].name).toEqual('Alex');
  });
});
