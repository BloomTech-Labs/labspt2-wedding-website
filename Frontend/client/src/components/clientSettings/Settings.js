import React, { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <div>
        <div>
          {/* To be added once menu is completed */}
          {/* <Menu /> */}
        </div>
        <div>
          <form>
            <label>
              Email:
              <input type="text" placeholder="Email" />
            </label>
          </form>
        </div>
        <div>
          <form>
            <label>
              Phone:
              <input type="text" placeholder="Phone" />
            </label>
          </form>
        </div>
        <div>
          <form>
            Email:
            <input type="checkbox" />
            Text:
            <input type="checkbox" />
          </form>
        </div>
        <div>
          <form>
            Old Password:
            <input type="text" />
            New Password:
            <input type="text" />
          </form>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Partner Name" />
            <button>Save</button>
            <button>Delete</button>
            <input type="text" placeholder="Partner Name" />
            <button>Save</button>
            <button>Delete</button>
          </form>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Use a date picker plug in" />
          </form>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Wedding Location" />
            <button>Save</button>
            <button>Delete</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
