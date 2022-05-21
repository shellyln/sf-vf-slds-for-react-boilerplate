# sf-vf-slds-for-react-boilerplate

Salesforce "Visualforce" + "Lightning Design System for React" boilerplate 🚀

* https://react.lightningdesignsystem.com/
* https://reactjs.org/
* https://www.lightningdesignsystem.com/


---

## 🧩 Prerequirements

* Node.js >= 16
* Bash
* Salesforce CLI (sfdx)


## 🪄 Preinstalled packages

### Dev dependencies

* eslint-plugin-react

### Bundled libraries

* requirejs (MIT)
* @babel/standalone (MIT)
* react (MIT)
* @salesforce/design-system-react (BSD-3-Clause)


## ⚙️ Setup

```bash
sfdx force:auth:web:login -r https://login.salesforce.com -a my-dev-org
# Or create new Scratch Org:
# sfdx force:org:create -f project-scratch-def.json -a my-dev-org --setdefaultusername

sfdx force:alias:list
sfdx force:org:list
sfdx config:set defaultusername=my-dev-org
sfdx force:org:open

# Install eslint
npm install
```

## 💡 Examples

### force-app\main\default\pages\HelloWorld1.page
* "Lightning Design System for React" On-the-Fly transpile example

```
.
└── force-app/main/default/
    ├── components/
    │   └── React_prod.component
    ├── pages/
    │   └── HelloWorld1.page
    └── staticresources/
        ├── HelloWorld1/
        │   ├── app.js
        │   └── ...
        ├── (bundled libraries)
        └── ...
```


### force-app\main\default\pages\HelloWorld2.page
* "Lightning Design System for React" + "Create React App" + "React Router" with TypeScript example
  * Dynamic chunk loading

```
.
├── force-app/main/default/
│   ├── pages/
│   │   └── HelloWorld2.page
│   └── staticresources/
│       └── HelloWorld2/
│           ├── (build artifacts)
│           └── ...
└── vf-app/HelloWorld2/
    ├── public/
    │   └── ...
    ├── src/
    │   ├── App.tsx
    │   └── ...
    ├── package.json
    └── ...
```


## ⌛️ Build

```bash
cd vf-app/HelloWorld2
npm run build
cd ../..
```


## 📦 Deploy

See https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm

```bash
sfdx force:source:deploy -m "StaticResource,ApexComponent,ApexPage"
```

---

## ⚖️ License

MIT
