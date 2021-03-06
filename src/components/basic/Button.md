<!--
SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>

SPDX-License-Identifier: AGPL-3.0-only
-->

### Colors

```jsx
import { Container, Text } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="horizontal" mainAlignment="space-around" height={400} width="fill">
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button label="Button" color="primary" onClick={click}/>
        <Button label="Button" color="secondary" onClick={click}/>
        <Button label="Button" color="warning" onClick={click}/>
        <Button label="Button" color="error" onClick={click}/>
        <Button label="Button" color="success" onClick={click}/>
        <Button label="Button" color="info" onClick={click}/>
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="outlined" label="Button" color="primary" onClick={click}/>
        <Button type="outlined" label="Button" color="secondary" onClick={click}/>
        <Button type="outlined" label="Button" color="warning" onClick={click}/>
        <Button type="outlined" label="Button" color="error" onClick={click}/>
        <Button type="outlined" label="Button" color="success" onClick={click}/>
        <Button type="outlined" label="Button" color="info" onClick={click}/>
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="ghost" label="Button" color="primary" onClick={click}/>
        <Button type="ghost" label="Button" color="secondary" onClick={click}/>
        <Button type="ghost" label="Button" color="warning" onClick={click}/>
        <Button type="ghost" label="Button" color="error" onClick={click}/>
        <Button type="ghost" label="Button" color="success" onClick={click}/>
        <Button type="ghost" label="Button" color="info" onClick={click}/>
    </Container>
</Container>
```

### Icon

```jsx
import { Container, Text } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="horizontal" mainAlignment="space-around" height={400} width="fill">
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button label="Button" icon="Activity" color="primary" onClick={click}/>
        <Button label="Button" icon="At" iconPlacement="left" color="secondary" onClick={click}/>
        <Button label="Button" icon="Globe" color="warning" onClick={click}/>
        <Button label="Button" icon="Sync" iconPlacement="left" color="error" onClick={click}/>
        <Button label="Button" icon="Sync" color="success" onClick={click}/>
        <Button label="Button" icon="Sync" iconPlacement="left" color="info" onClick={click}/>
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="outlined" label="Button" icon="Activity" iconPlacement="left" color="primary" onClick={click}/>
        <Button type="outlined" label="Button" icon="At" color="secondary" onClick={click}/>
        <Button type="outlined" label="Button" icon="Globe" iconPlacement="left" color="warning" onClick={click}/>
        <Button type="outlined" label="Button" icon="Sync" color="error" onClick={click}/>
        <Button type="outlined" label="Button" icon="Sync" iconPlacement="left" color="success" onClick={click}/>
        <Button type="outlined" label="Button" icon="Sync" color="info" onClick={click}/>
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="ghost" label="Button" icon="Activity" color="primary" onClick={click}/>
        <Button type="ghost" label="Button" icon="At" iconPlacement="left" color="secondary" onClick={click}/>
        <Button type="ghost" label="Button" icon="Globe" color="warning" onClick={click}/>
        <Button type="ghost" label="Button" icon="Sync" iconPlacement="left" color="error" onClick={click}/>
        <Button type="ghost" label="Button" icon="Sync" color="success" onClick={click}/>
        <Button type="ghost" label="Button" icon="Sync" iconPlacement="left" color="info" onClick={click}/>
    </Container>
</Container>
```

### Size

```jsx
import { Container, Text } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="vertical" mainAlignment="space-around" background="gray5" height={200} width="50%">
    <Button label="Button" icon="Activity" onClick={click} size="fit" />
    <Button label="Button" icon="Activity" onClick={click} size="fit" isSmall/>
    <Button label="Button" icon="Activity" onClick={click} size="fill" />
    <Button label="Button" icon="Activity" onClick={click} size="fill" isSmall/>
</Container>
```

### Custom Colors

```jsx
import { Container, Text } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="horizontal" mainAlignment="space-around" height={400} width="fill">
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button label="Button" labelColor="text" backgroundColor="gray1" onClick={click}/>
        <Button label="Button" labelColor="error" backgroundColor="gray1" onClick={click}/>
        <Button label="Button" labelColor="secondary" backgroundColor="gray2" onClick={click}/>
        <Button label="Button" labelColor="gray6" backgroundColor="gray1" onClick={click}/>
        <Button label="Button" labelColor="primary" backgroundColor="gray1" onClick={click}/>
    </Container>
</Container>
```

### Disabled

```jsx
import { Container, Text } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="horizontal" mainAlignment="space-around" height={400} width="fill">
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button label="Button" color="primary" onClick={click} disabled />
        <Button label="Button" color="secondary" onClick={click} disabled />
        <Button label="Button" color="warning" onClick={click} disabled />
        <Button label="Button" color="error" onClick={click} disabled />
        <Button label="Button" color="success" onClick={click} disabled />
        <Button label="Button" color="info" onClick={click} disabled />
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="outlined" label="Button" color="primary" onClick={click} disabled />
        <Button type="outlined" label="Button" color="secondary" onClick={click} disabled />
        <Button type="outlined" label="Button" color="warning" onClick={click} disabled />
        <Button type="outlined" label="Button" color="error" onClick={click} disabled />
        <Button type="outlined" label="Button" color="success" onClick={click} disabled />
        <Button type="outlined" label="Button" color="info" onClick={click} disabled />
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="ghost" label="Button" color="primary" onClick={click} disabled />
        <Button type="ghost" label="Button" color="secondary" onClick={click} disabled />
        <Button type="ghost" label="Button" color="warning" onClick={click} disabled />
        <Button type="ghost" label="Button" color="error" onClick={click} disabled />
        <Button type="ghost" label="Button" color="success" onClick={click} disabled />
        <Button type="ghost" label="Button" color="info" onClick={click} disabled />
    </Container>
</Container>
```

### ForceActive

#### Fixed forceActive

```jsx
import { Container } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="vertical" mainAlignment="space-around" background="gray5" height={100} width="30%">
    <Button label="Button" color="primary" onClick={click} forceActive />
</Container>
```

#### Disabled has priority on forceActive

```jsx
import { Container } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="vertical" mainAlignment="space-around" background="gray5" height={100} width="30%">
    <Button label="Button" color="primary" onClick={click} disabled forceActive />
</Container>
```

#### Use case with dropdown

```jsx
import { useState } from "react";
import { Container, Dropdown } from '@zextras/carbonio-design-system';

const [dropdownOpen, setDropdownOpen] =  useState(false);

const items = [
	{
		id: "activity-1",
		icon: "Activity",
		label: "Some Item",
	},
	{
		id: "activity-3",
		icon: "Activity",
		label: "Yet Another Item",
	}
];

<Container orientation="vertical" mainAlignment="space-around" background="gray5" height={100} width="30%">
	<Dropdown items={items} placement="right-start" onOpen={() => setDropdownOpen(true)} onClose={() => setDropdownOpen(false)}>
		<Button label="Button" color="primary" forceActive={dropdownOpen} />
    </Dropdown>
</Container>
```

### Loading

```jsx
import { Container, Text } from '@zextras/carbonio-design-system';

const click = () => console.log('click!');

<Container orientation="horizontal" mainAlignment="space-around" height={400} width="fill">
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button label="Button" color="primary" onClick={click} loading />
        <Button label="Button" color="secondary" onClick={click} loading />
        <Button label="Button" color="warning" onClick={click} loading />
        <Button label="Button" color="error" onClick={click} loading />
        <Button label="Button" color="success" onClick={click} loading />
        <Button label="Button" color="info" onClick={click} loading disabled />
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="outlined" label="Button" color="primary" onClick={click} loading />
        <Button type="outlined" label="Button" color="secondary" onClick={click} loading />
        <Button type="outlined" label="Button" color="warning" onClick={click} loading />
        <Button type="outlined" label="Button" color="error" onClick={click} loading />
        <Button type="outlined" label="Button" color="success" onClick={click} loading />
        <Button type="outlined" label="Button" color="info" onClick={click} loading disabled />
    </Container>
    <Container orientation="vertical" mainAlignment="space-around" background="gray5" height={400} width="30%">
        <Button type="ghost" label="Button" color="primary" onClick={click} loading />
        <Button type="ghost" label="Button" color="secondary" onClick={click} loading />
        <Button type="ghost" label="Button" color="warning" onClick={click} loading />
        <Button type="ghost" label="Button" color="error" onClick={click} loading />
        <Button type="ghost" label="Button" color="success" onClick={click} loading />
        <Button type="ghost" label="Button" color="info" onClick={click} loading disabled />
    </Container>
</Container>
```

### Development status:
```jsx noEditor
import { Container, Icon } from '@zextras/carbonio-design-system';
import StatusTable from 'status-table';
const items = [{
    feature: 'Graphics',
    status: 1,
    notes: ''
},{
    feature: 'Documentation',
    status: 3,
    notes: ''
},{
    feature: 'Examples',
    status: 3,
    notes: ''
},{
    feature: 'I18n Compatibility',
    status: 1,
    notes: ''
},{
    feature: 'Theme Compatibility',
    status: 1,
    notes: ''
},{
    feature: 'Dark Mode',
    status: 1,
    notes: ''
},{
    feature: 'Prop Types',
    status: 1,
    notes: ''
},{
    feature: 'Index Export',
    status: 1,
    notes: ''
},{
    feature: 'Customizability',
    status: 2,
    notes: 'Only accepts a string and icon as content'
},
];

<StatusTable items={items} />

```
