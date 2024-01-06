import { Icon } from '@iconify/react';

export default function Header(){
    return (
        <header className="container" 
            style={{height: '11.1rem', backgroundColor: '#FFBC39', display: 'flex', justifyContent: 'space-between'}}>
            <div 
                style={{padding: '2.4rem', 
                alignSelf: 'end', backgroundColor: 'var(--background-gray)', borderRadius: '1rem 1rem 0 0', borderStyle: 'solid',
                borderColor: 'var(--dark-green)',
                borderWidth: '.1rem .1rem 0',
                color: 'var(--dark-green)',
                maxWidth: 'var(--sb-max-width)',
                width: '100%'}}>
                <h2>SAD</h2>
            </div>
            <nav style={{alignSelf: 'center'}}>
                <ul style={{display: 'flex', textDecoration: 'none', gap: '2.4rem', color: 'var(--text-dark-gray)'}}>
                    <li><Icon icon="mdi:bell" width="24"/></li>
                    <li><Icon icon="mdi:help-circle-outline" width="24"/></li>
                    <li><Icon icon="mdi:account-box-outline" width="24"/></li>
                </ul>
            </nav>
        </header>
    )
}