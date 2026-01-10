const GHL_API_KEY = import.meta.env.VITE_GHL_API_KEY;
const GHL_LOCATION_ID = import.meta.env.VITE_GHL_LOCATION_ID;
const GHL_API_BASE = 'https://services.leadconnectorhq.com';

async function makeGHLRequest(endpoint, method = 'GET', body = null) {
  try {
    const options = {
      method,
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      }
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${GHL_API_BASE}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      const traceId = response.headers.get('x-trace-id') || 'No trace ID';
      console.error('GHL API Error:', {
        status: response.status,
        statusText: response.statusText,
        traceId,
        data
      });
      throw new Error(`GHL API error: ${response.status} - ${data.message || 'Unknown error'} (Trace ID: ${traceId})`);
    }

    return data;
  } catch (error) {
    console.error('GHL request failed:', error);
    throw error;
  }
}

/**
 * Submit contact form to GHL
 */
export async function submitToGHL(formData) {
  try {
    const editedTags = ['website_order']
    if (formData.consent) {
      editedTags.push('newsletter')
    }
    const contactData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      locationId: GHL_LOCATION_ID,
      tags: editedTags,
      customFields: [
        {
          key: 'request',
          field_value: formData.message
        },
        {
          key: 'consent',
          field_value: formData.consent.toString()
        },
        {
          key: 'source',
          field_value: 'website_contact_form'
        }
      ]
    };

    const data = await makeGHLRequest('/contacts/upsert', 'POST', contactData);
    return { success: true, contact: data.contact || data };
  } catch (error) {
    console.error('GHL submission failed:', error);
    throw error;
  }
}
