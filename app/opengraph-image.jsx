import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FloorSquare - Commercial Co-Broking Platform in Jaipur';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#FFFBEB',
          border: '16px solid #0f172a',
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, fontWeight: 900, color: '#FF5722' }}>FloorSquare</div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 900, color: '#0f172a', marginTop: 24, lineHeight: 1.1 }}>
          Commercial co-broking in Jaipur, 10x faster
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#334155', marginTop: 32 }}>
          Match mandates with verified RERA brokers
        </div>
      </div>
    ),
    size
  );
}
