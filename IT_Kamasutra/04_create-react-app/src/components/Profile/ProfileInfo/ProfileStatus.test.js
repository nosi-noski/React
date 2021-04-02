import React from 'react'
import { create } from 'react-test-renderer'

import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", () => {
    test("status from props to state", () => {
        const component = create(<ProfileStatus statusText="status-test" />);
        const instance = component.getInstance();
        expect(instance.props.statusText).toBe("status-test");
    });

    test("after all, <span> is displayed", () => {
            const component = create(<ProfileStatus statusText="status-test" />);
            const root = component.root;
            let span = root.findByType('span');
            expect(span && span.children[0]).not.toBeNull()
    });

    test("after all, <span> is displayed with statusText", () => {
        const component = create(<ProfileStatus statusText="status-test" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span && span.children[0]).toBe("status-test")
    });

    test("after all, <input> is not displayed with statusText", () => {
        const component = create(<ProfileStatus statusText="status-test" />);
        const root = component.root;
       
        expect( () => {
            let input = root.findByType('input');
        }).toThrow()
    });


    test("input shows instead span after span -> doubleClick", () => {
        const component = create(<ProfileStatus statusText="status-test" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
       
        expect(input.props.value ).toBe('status-test')
    });

    test("callback setUserStatusThunkCreator was called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus statusText="status-test" 
                                                setUserStatusThunkCreator={ mockCallback } />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});