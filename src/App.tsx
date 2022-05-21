import React, { useState } from 'react';
import './App.css';
import Item from './Item';
import $ from 'jquery';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [list, setList] = useState(new Array<Item>());

  
  function add(todo : string) {
    if(todo === '') {
      return; 
    }

    setList([...list, new Item(list.length, todo, false)]);
    $('#todo-text').val('');
  }

  function remove(id:number) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  function checked(id:number) {
    const newList = list.map(item => {
      if(item.id == id) {
        return new Item(item.id, item.todo, !item.checked);
      }
      return item;
    });
    setList(newList);
  }




  return (
    <Container>
      <h1 className='text-center'>MyToDo</h1>
      <Row className='mt-5'>
        <Col>
          <Form.Control type='text' id='todo-text' placeholder='할일을 적어주세요.'/>
        </Col>
        <Col>
          <Button onClick={()=>add($('#todo-text').val() as string)}>
             <FontAwesomeIcon icon={faAdd} />
          </Button>
        </Col>
      </Row>

      <ListGroup className='mt-3'>
        {
          list.map(item => (
            <ListGroup.Item key={item.id} 
              variant={item.checked ? 'dark' : 'info'}>

              <Row>
                
                <Col onClick={()=>checked(item.id)}>
                    <div className={`display-6 ${item.checked ? 'checked' : ''}`}
                  style={{display:'inline-block'}}>
                        
                        <FontAwesomeIcon icon={faCheck} style={{display : `${item.checked ? 'inline-block' : 'none'}`}}/>
                        {item.todo}
                    </div>
                </Col>

                <Col className='text-end'>
                    <Button variant='danger' onClick={()=>remove(item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Col>
              
              </Row>
          
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Container>
  );
}

export default App;
