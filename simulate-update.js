
const http = require('http');

async function simulateDailyUpdate() {
    console.log('--- Starting Daily Update Simulation ---');

    // 1. Manually trigger the generate logic (since we can't wait for cron)
    // In a real environment, you'd call a private administrative endpoint or wait for the cron.
    console.log('Step 1: Content generation triggered (Simulated)');

    const sites = [
        { name: 'Site A', port: 3000 },
        { name: 'Site B', port: 3001 },
        { name: 'Site C', port: 3002 }
    ];

    for (const site of sites) {
        console.log(`Step 2: Triggering ISR Revalidation for ${site.name}...`);
        try {
            const secret = process.env.REVALIDATION_SECRET || 'test_secret';
            const url = `http://localhost:${site.port}/api/revalidate?secret=${secret}`;

            const req = http.request(url, { method: 'POST' }, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    console.log(`Response from ${site.name}: ${data}`);
                });
            });
            req.on('error', e => console.error(`Error revalidating ${site.name}: ${e.message}`));
            req.end();
        } catch (err) {
            console.error(`Failed ${site.name}: ${err.message}`);
        }
    }
}

simulateDailyUpdate();
