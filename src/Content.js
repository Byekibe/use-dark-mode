import React from 'react';
import DarkModeStatus from './DarkModeStatus';
import DarkModeCommands from './DarkModeCommands';

const Content = () => (
  <div className="content">
    <h1>useDarkMode</h1>
    <p>
      This is an example app that uses the <code>useDarkMode</code> custom hook.
      It persists across sessions (i.e., uses <code>localStorage</code>) and
      shares state across instances and even tabs and/or browser windows.
    </p>
    <p>
      For example, here is a component that shares the custom hook{' '}
      <code>useDarkMode</code> with the toggle component above.
    </p>
    <p>
      It is reporting that the current mode is:{' '}
      <code>
        <DarkModeStatus />
      </code>
    </p>
    <p>
      And here's another: <DarkModeCommands />
    </p>
    <p>It couldn't be any easier!</p>
    <p>
      <img
        alt="code"
        src="https://uploads.codesandbox.io/uploads/user/dadc333f-4fd2-4f2d-9ce8-1d7a80efd28a/rgAl-carbon.png"
      />
    </p>
    <p>
      View the source for this{' '}
      <a href="https://codesandbox.io/s/mzj64x80ny">demo app</a> or see the
      useDarkMode{' '}
      <a href="https://github.com/donavon/use-dark-mode">
        source code on Github
      </a>
      .{' '}
    </p>
  </div>
);

export default Content;
